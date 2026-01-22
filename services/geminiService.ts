export const generateStrategicInsight = async (topic: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Log de diagnóstico
  console.log("Iniciando petición directa. Llave detectada:", !!apiKey);

  if (!apiKey) {
    return "Error: API Key no configurada.";
  }

  // URL directa de la API de Google (usando la versión estable)
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `System: Eres Eduardo Mendoza, consultor estratégico de tecnología. 
            Responde con un tono sincero, analítico, elegante y minimalista. 
            Usa el mismo idioma del usuario.
            
            Desafío del usuario: ${topic}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error de la API de Google:", errorData);
      return `Error de la API (${response.status}): ${errorData.error?.message || 'Consulta la consola'}`;
    }

    const data = await response.json();
    
    // Extraemos el texto de la estructura de respuesta de Google
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return aiResponse || "El Oráculo no pudo procesar la respuesta.";

  } catch (error: any) {
    console.error("Error en fetch directo:", error);
    return "Error de red: No se pudo conectar con el Oráculo.";
  }
};
