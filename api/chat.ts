import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Manejo de CORS y método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic } = req.body;
  const apiKey = process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API Key missing on server" });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Eres Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del Oráculo" });
  }
}
