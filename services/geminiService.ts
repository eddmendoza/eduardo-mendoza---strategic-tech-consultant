import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return "Oracle offline: API Key not found.";
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    
    // Usamos el modelo 1.5-flash que es el que tiene mayor disponibilidad
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      // Movimos la instrucción aquí, que es donde la espera la SDK moderna
      systemInstruction: "You are Eduardo Mendoza, a high-end tech consultant. Tone: Sincere, analytical, direct, elegant, and minimalist. Respond in the same language as the user. Use markdown for emphasis."
    });

    const result = await model.generateContent(topic);
    const response = await result.response;
    const text = response.text();

    return text || "The Oracle is silent. Try reframing your question.";

  } catch (error: any) {
    console.error("Gemini API Detail:", error);

    // Mensajes amigables según el tipo de error
    if (error.message?.includes("429")) {
      return "The Oracle is receiving too many inquiries. Please wait a minute.";
    }
    if (error.message?.includes("503")) {
      return "Google's servers are temporarily overwhelmed. Try again in a moment.";
    }
    
    return "Complexity requires time to unravel. Please try again.";
  }
};
