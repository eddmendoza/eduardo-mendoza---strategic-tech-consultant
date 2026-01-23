import * as GenAI from "@google/genai";

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) return res.status(200).json({ text: "Error: No API Key." });

    // Técnica de acceso seguro al constructor
    const GoogleGenAI = (GenAI as any).GoogleGenAI || GenAI;
    const genAI = new GoogleGenAI(apiKey);
    
    // Usamos el modelo flash
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Eres Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });
  } catch (error: any) {
    return res.status(200).json({ text: "ERROR DE CONEXIÓN: " + error.message });
  }
}
