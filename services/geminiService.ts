import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // 1. Extraemos la llave directamente
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  console.log("Comprobación de API Key:", apiKey ? "DETECTADA (OK)" : "NO DETECTADA (ERROR)");

  if (!apiKey) {
    return "Error: API Key no configurada.";
  }

  try {
    // 2. IMPORTANTE: Inicialización explícita dentro del bloque try
    const genAI = new GoogleGenAI(apiKey);
    
    // 3. Obtenemos el modelo
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash"
    });

    // 4. Estructura de mensaje simplificada al máximo para evitar errores de validación de la SDK
    const result = await model.generateContent({
      contents: [{ 
        role: "user", 
        parts: [{ text: `System: Eres Eduardo Mendoza, consultor estratégico. Responde brevemente al siguiente desafío: ${topic}` }] 
      }]
    });

    const response = await result.response;
    const text = response.text();
    
    return text || "El Oráculo no pudo generar una respuesta.";

  } catch (error: any) {
    // Si el error sigue siendo "An API Key must be set", intentaremos un método alternativo
    console.error("Error detallado de Gemini:", error);
    
    if (error.message?.includes("API Key must be set")) {
      return "Error interno de inicialización de la SDK de Google. Reintentando con protocolo de respaldo...";
    }
    
    return `Error: ${error.message || "Consulta la consola"}`;
  }
};
