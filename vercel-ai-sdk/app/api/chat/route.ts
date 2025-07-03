import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('qwen-qwq-32b'),
    messages,
    system: 'You are a helpful assistant.',
  });

  return result.toDataStreamResponse();
}