import { GoogleGenerativeAI } from "@google/generative-ai";

if (!import.meta.env.VITE_GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing. Check your .env file.");
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

async function getMoodMovie( mood ) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction:
      "You are a movies expert  ",
  });

  const generationConfig = {
    temperature: 0.7,
    maxOutputTokens: 800,
    topP: 0.95,
  };


const prompt = `
The user is feeling: "${mood}".
Suggest ONE movie that matches their mood.
Reply with ONLY the movie title, nothing else.
No explanation, no punctuation, no quotes.`;

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  });

  const text = result.response.text();

  if (!text || text.trim() === "") {
    throw new Error("Gemini returned an empty response. Try rephrasing your input.");
  }

  return text;
}

export { getMoodMovie };