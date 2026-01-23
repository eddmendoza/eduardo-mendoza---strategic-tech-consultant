// Usamos una importación más robusta para Node.js
const { GoogleGenAI } = require("@google/genai");

export default async function handler(req: any, res: any) {
  // Cabeceras de seguridad y CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { topic } = body;
    
    // Intentamos ambas variables por seguridad
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ text: "DETALLE: No se encontró la API Key en el servidor." });
    }

    // Inicialización estándar
    const genAI = new GoogleGenAI(apiKey);
    
    // Accedemos al modelo
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como Eduardo Mendoza, consultor estratégico. Responde de forma elegante y breve a: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Error detallado:", error);
    return res.status(200).json({ 
      text: "DETALLE GOOGLE: " + (error.message || "Error al procesar el modelo") 
    });
  }
}
