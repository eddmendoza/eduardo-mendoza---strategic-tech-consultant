import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Manejo de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { topic } = body;

    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Llave no configurada en servidor" });
    }

    // Inicialización explícita para evitar errores de tipos TS
    const genAI = new GoogleGenAI(apiKey);
    
    // Especificamos el modelo
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `System: Eres Eduardo Mendoza, consultor estratégico de tecnología. Responde de forma elegante, minimalista y breve a: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Error en servidor:", error);
    return res.status(500).json({ 
      error: "Error en el Oráculo", 
      details: error.message 
    });
  }
}
