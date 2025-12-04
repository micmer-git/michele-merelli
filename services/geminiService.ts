import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize properly only if key exists to avoid immediate crash, 
// though we handle the missing key in the UI.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const streamGeminiResponse = async (
  history: { role: string; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  if (!ai) {
    onChunk("I'm sorry, I don't have an API key configured right now. Please set the API_KEY environment variable.");
    return;
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a helpful, witty, and concise AI assistant living on a personal portfolio website. 
    Your goal is to represent the site owner (a Senior Full Stack Engineer) professionally but with a modern, tech-forward personality.
    Keep answers relatively short (under 100 words unless asked for more).
    
    Site Owner Details:
    - Name: Alex Dev
    - Role: Senior Frontend Engineer
    - Stack: React, TypeScript, Tailwind, Node.js, Gemini API
    - Location: San Francisco, CA
    - Interests: UI/UX Design, AI Agents, Clean Code.

    If asked about contact info, suggest checking the 'Contact' card on the grid.
    If asked about projects, mention the 'App Links' on the grid.
    `;

    // Convert history to format expected by Chat (though we are using sendMessageStream on a chat instance)
    // We will create a fresh chat for simplicity or maintain one if we had a persistent store. 
    // For this stateless service function, we'll reconstruct context via history if needed, 
    // but the simplest way with the SDK for a quick chat widget is to just start a chat.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    onChunk("\n\n(Oops! I encountered a temporary connection error. Please try again.)");
  }
};