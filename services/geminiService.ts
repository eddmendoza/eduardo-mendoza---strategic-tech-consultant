import { GoogleGenAI } from "@google/genai";

// Inicializamos el cliente fuera de la función para mayor estabilidad
const genAI = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  try {
    // Usamos el modelo 1.5-flash que es el más rápido y estable para cuentas gratuitas
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como Eduardo Mendoza, consultor estratégico de tecnología. 
    Tu estilo es sincero, analítico, elegante y minimalista. 
    Responde de forma breve y profunda, aportando una perspectiva única.
    Idioma: Responde en el mismo idioma en el que se te hace la consulta.
    
    Desafío: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Error en el Oráculo:", error);
    return "El Oráculo está en un breve periodo de reflexión. Por favor, intenta de nuevo en un momento.";
  }
};
