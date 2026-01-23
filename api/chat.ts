import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Manejo de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Vercel a veces recibe el body como string, nos aseguramos de parsearlo
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { topic } = body;

    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Llave no configurada en servidor" });
    }

    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `System: Eres Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Error en servidor:", error);
    return res.status(500).json({ error: "Falla al conectar con Gemini: " + error.message });
  }
}
