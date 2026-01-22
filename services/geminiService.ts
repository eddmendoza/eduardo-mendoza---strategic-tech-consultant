import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // 1. Diagnóstico de la variable
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Este log nos dirá la verdad en la consola (F12)
  console.log("Comprobación de API Key:", apiKey ? "DETECTADA (OK)" : "NO DETECTADA (ERROR)");

  if (!apiKey) {
    return "Error: La API Key no está configurada en el entorno (Vite).";
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `System: Eres Eduardo Mendoza, un consultor de alta tecnología. 
    Analiza y responde de forma elegante y breve en el idioma del usuario.
    Desafío: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error detallado de Gemini:", error);
    
    // Si la llave existe pero falla, el error nos dirá por qué (Región, cuota, etc.)
    return `Error de conexión: ${error.message || "Consulta la consola"}`;
  }
};
