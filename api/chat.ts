import * as GoogleGenAIModule from "@google/genai";

export default async function handler(req: any, res: any) {
  // Cabeceras CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(200).json({ text: "Método no permitido" });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    // --- LÓGICA DE DETECCIÓN DE LIBRERÍA ---
    // A veces Vercel importa la clase dentro de .GoogleGenAI y otras veces es la base
    const AnyModule = GoogleGenAIModule as any;
    const ActualGoogleGenAI = AnyModule.GoogleGenAI || AnyModule;
    
    if (typeof ActualGoogleGenAI !== 'function') {
        throw new Error("No se pudo inicializar la clase de Google. Tipo: " + typeof ActualGoogleGenAI);
    }

    const genAI = new ActualGoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Eres Eduardo Mendoza, un consultor estratégico de tecnología. Tu tono es sofisticado, analítico y breve. Responde a: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return res.status(200).json({ text: response.text() });

  } catch (error: any) {
    console.error("DEBUG:", error);
    return res.status(200).json({ 
      text: "DETALLE TÉCNICO: " + error.message 
    });
  }
}
