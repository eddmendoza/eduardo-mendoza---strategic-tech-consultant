import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { topic } = req.body;
  // IMPORTANTE: En Vercel Serverless usamos process.env, no import.meta.env
  const apiKey = process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "La API Key no llegó al servidor" });
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Eres Eduardo Mendoza, consultor estratégico. Responde de forma elegante y breve a: ${topic}`);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Error en servidor:", error);
    return res.status(500).json({ error: "El Oráculo tuvo un error interno" });
  }
}
