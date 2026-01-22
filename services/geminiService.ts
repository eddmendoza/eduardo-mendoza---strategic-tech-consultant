import { GoogleGenAI } from "@google/genai";

export const generateStrategicInsight = async (topic: string): Promise<string> => {
  // 1. Obtenemos la llave JUSTO cuando se necesita
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error("Variable VITE_GEMINI_API_KEY no encontrada");
    return "Configuración pendiente: La llave del Oráculo no está disponible.";
  }

  try {
    // 2. Inicializamos el cliente DENTRO de la función
    // Esto evita que el error "An API Key must be set" bloquee el sitio al cargar
    const genAI = new GoogleGenAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como Eduardo Mendoza, consultor estratégico. 
    Analiza y responde de forma elegante y breve. 
    Idioma: Mismo que el usuario.
    Desafío: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Error del Oráculo:", error);
    return "El Oráculo está en una sesión de consultoría privada. Por favor, deja tu mensaje en la sección de contacto para agendar una sesión directa";
  }
};
