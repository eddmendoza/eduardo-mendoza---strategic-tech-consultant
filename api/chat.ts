import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // 1. Cabeceras de CORS obligatorias para evitar "Error de red"
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Manejo de pre-flight (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ text: "Método no permitido" });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ text: "DETALLE: Falta la API Key en el panel de Vercel." });
    }

    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Actúa como Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });
  } catch (error: any) {
    return res.status(200).json({ text: "DETALLE GOOGLE: " + (error.message || "Error interno") });
  }
}
