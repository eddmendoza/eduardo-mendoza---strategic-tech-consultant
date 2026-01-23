import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // Leemos la variable y nos aseguramos de que sea un string
  const apiKey = String(import.meta.env.VITE_GEMINI_API_KEY || "").trim();

  if (!apiKey || apiKey === "undefined") {
    console.error("Error: VITE_GEMINI_API_KEY no detectada.");
    return "Error de configuración: La clave del Oráculo no está presente.";
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    // Usamos el modelo flash por su velocidad y estabilidad
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `System: Actúa como Eduardo Mendoza, consultor estratégico de tecnología. 
    Tu estilo es minimalista, analítico y elegante. Responde brevemente al siguiente desafío.
    Idioma: El mismo que use el usuario.
    
    Desafío: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "El Oráculo no pudo generar una respuesta clara.";
    
  } catch (error: any) {
    console.error("Error detallado de Gemini:", error);
    
    // Si el error es por la llave, nos lo dirá aquí
    if (error.message?.includes("API key")) {
      return "Error: La clave del Oráculo parece ser inválida o ha expirado.";
    }
    
    return "El Oráculo está procesando demasiada información. Intenta de nuevo en un momento.";
  }
};
