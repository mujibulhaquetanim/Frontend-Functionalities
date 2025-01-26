import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function POST(request: NextRequest) {
  const { question } = await request.json();
  
  if (!question) {
    return NextResponse.json(
      { error: "Please ask a question" },
      { status: 400 }
    );
  }

  try {
    const dataPath = path.join(process.cwd(), 'data/services.json');
    const services = JSON.parse(await fs.readFile(dataPath, 'utf8'));
    
    // Simple fuzzy matching
    const cleanQuestion = question.toLowerCase();
    const match = services.find((service: any) => 
      service.questions.some((keyword: string) => 
        cleanQuestion.includes(keyword)
      )
    );

    return NextResponse.json({
      answer: match?.answer || "I specialize in frontend development and web design. Ask me about my projects or experience!",
      matchFound: !!match
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Error processing your question" },
      { status: 500 }
    );
  }
}