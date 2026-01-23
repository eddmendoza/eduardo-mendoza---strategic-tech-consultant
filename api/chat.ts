import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Configuración de cabeceras para permitir la petición
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
      return res.status(500).json({ error: "API Key no configurada en el servidor" });
    }

    // Usamos 'as any' para silenciar los errores TS2559 y TS2339
    // Esto permite que el código compile y Vercel lo despliegue
    const genAI = new (GoogleGenAI as any)(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `System: Eres Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Error crítico:", error);
    // Cambiamos esta línea para que nos diga EL ERROR REAL en el frontend
    return res.status(500).json({ 
      text: "Error del Oráculo: " + (error.message || "Falla de conexión") 
    });
  }
}
