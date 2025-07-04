import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
try {
    const { messages } = await req.json();
  
    const result = streamText({
      model: groq('gemma2-9b-it'),
      messages,
    });
  
    return result.toDataStreamResponse();
} catch (error: any) {
  if (error.name === 'Error' && error.message.includes('AI_SDK_')) {
      // Example of handling AI SDK specific errors
      return new Response(JSON.stringify({ error: `AI service error: ${error.message}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generic error response
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
}
}