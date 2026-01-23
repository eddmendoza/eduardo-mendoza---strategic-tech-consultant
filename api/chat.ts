import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const { topic } = await req.json();
  const apiKey = process.env.VITE_GEMINI_API_KEY; // En el servidor usamos process.env

  const genAI = new GoogleGenAI(apiKey || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(`Eres Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`);
    return new Response(JSON.stringify({ text: result.response.text() }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Falla en el Oráculo" }), { status: 500 });
  }
}
