const { GoogleGenAI } = require("@google/genai");

export default async function handler(req: any, res: any) {
  // Cabeceras CORS esenciales
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(200).json({ text: "Método no permitido" });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ text: "DETALLE: No se encontró la API Key." });
    }

    // Inicialización directa
    const genAI = new GoogleGenAI(apiKey);
    
    // Aquí está el cambio: forzamos el acceso al modelo
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Actúa como Eduardo Mendoza, consultor estratégico. Responde brevemente a: ${topic}`);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });

  } catch (error: any) {
    console.error("DEBUG:", error);
    // Este mensaje nos dirá si es un error de Google o de nuestra lógica
    return res.status(200).json({ 
      text: "ERROR FINAL: " + error.message 
    });
  }
}
