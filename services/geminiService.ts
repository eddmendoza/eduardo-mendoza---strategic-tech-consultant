import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    // Usamos import.meta.env para que Vite pueda leer la llave en Vercel
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''; 
    return new GoogleGenAI({ apiKey });
}

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // Verificamos la variable con el prefijo VITE_
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return "Unable to access the Oracle. (API Key missing configuration)";
  }

  const ai = getClient();
  
  const systemInstruction = `
    You are Eduardo Mendoza, a high-end tech consultant.
    Your tone is: Sincere, analytical, direct, elegant, and slightly minimalist...
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Mantén el que te dio AI Studio
      contents: topic,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Complexity requires time to unravel. Try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently calibrating. Please try again later.";
  }
};
