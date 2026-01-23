import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { topic } = body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ text: "DETALLE: El servidor no encuentra la variable de entorno." });
    }

    const genAI = new (GoogleGenAI as any)(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Responde brevemente: ${topic}`);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });
  } catch (error: any) {
    // Forzamos que el error de Google viaje como un texto normal para leerlo en la web
    return res.status(200).json({ text: "DETALLE GOOGLE: " + error.message });
  }
}
