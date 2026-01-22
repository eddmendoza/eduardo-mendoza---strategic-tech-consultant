import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // Intentamos leerla de ambas formas por si acaso
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // Log de diagnóstico (Solo para depurar, luego lo quitamos)
  if (!apiKey) {
    console.error("DEBUG: La API Key no se está cargando. Verifica Vercel.");
    return "Oracle offline: Configuration Error. Please check Environment Variables.";
  }

  try {
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: topic }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });

    return result.response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "The Oracle is calibrating. Please try again.";
  }
};
