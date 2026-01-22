import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''; 
  return new GoogleGenAI(apiKey); // Simplificado según la última SDK
}

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    return "API Key missing configuration.";
  }

  const genAI = getClient();
  // Usamos 1.5-flash que es el más estable para free tier
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
  });

  // El truco para que no falle: 
  // Combinamos la instrucción con el prompt en un solo bloque si el systemInstruction falla
  const fullPrompt = `
    System: You are Eduardo Mendoza, a high-end tech consultant. Tone: Sincere, analytical, elegant, minimalist. Respond in the same language as the user.
    
    User Challenge: ${topic}
  `;

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
      generationConfig: {
        temperature: 0.5,
        topP: 0.8,
        topK: 40,
      },
    });

    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Gemini Error:", error);
    
    // Si el error es 503, es saturación de Google
    if (error.message?.includes('503')) {
      return "The Oracle is calibrating due to high demand. Please try again in 30 seconds.";
    }
    
    return "Complexity requires time. Please try again.";
  }
};
