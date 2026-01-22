import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''; 
    return new GoogleGenAI({ apiKey });
}

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return "Unable to access the Oracle. (API Key missing configuration)";
  }

  const ai = getClient();
  
  // Instrucciones optimizadas para realismo y formato
  const systemInstruction = `
    You are Eduardo Mendoza, a high-end tech consultant.
    Your tone is: Sincere, analytical, direct, elegant, and minimalist.
    
    GUIDELINES:
    - Respond in the SAME LANGUAGE as the user's input.
    - Use Markdown: **bold** for key concepts, but keep it clean.
    - Give a profound strategic reframe (max 3 short paragraphs).
    - Focus on "Systems over tactics."
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash', 
      contents: topic,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5, // Tu elección de 0.5 es ideal para realismo
        topP: 0.8,
        topK: 40,
      },
    });

    // Si la respuesta llega vacía, enviamos un mensaje con tu estilo
    return response.text || "Complexity requires time to unravel. Try again.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Este mensaje previene que el usuario vea errores técnicos crudos
    return "The Oracle is currently calibrating due to high demand. Please try again in a moment.";
  }
};
