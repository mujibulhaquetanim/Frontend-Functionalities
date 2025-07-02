import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const result = await generateText({
  model: groq('qwen-qwq-32b'),
  providerOptions: {
    groq: { reasoningFormat: 'parsed' },
  },
  prompt: 'How many "r"s are in the word "strawberry"?',
});