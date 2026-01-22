import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    // Ideally validation happens earlier, but ensuring we don't crash if env is missing
    const apiKey = process.env.VITE_GEMINI_API_KEY || ''; 
    return new GoogleGenAI({ apiKey });
}

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  if (!process.env.VITE_GEMINI_API_KEY) {
      return "Unable to access the Oracle. (API Key missing configuration)";
  }

  const ai = getClient();
  
  const systemInstruction = `
    You are Eduardo Mendoza, a high-end tech consultant.
    Your tone is: Sincere, analytical, direct, elegant, and slightly minimalist.
    You prioritize "Systems over tactics" and "Clarity over speed."
    
    The user will provide a business or tech challenge.
    You must respond with a short, profound strategic insight (max 3 sentences).
    Do not give a generic list of tips. Give a philosophical yet actionable reframing of their problem.
    Avoid buzzwords. Speak with authority and calm.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: topic,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }, // Low latency preference for this UI interaction
        temperature: 0.7,
      },
    });

    return response.text || "Complexity requires time to unravel. Try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently calibrating. Please try again later.";
  }
};
