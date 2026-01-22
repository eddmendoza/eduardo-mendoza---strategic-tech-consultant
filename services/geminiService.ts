export const generateStrategicInsight = async (topic: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) return "Error: API Key no detectada.";

  // Intentamos con v1 (más estable) y el nombre de modelo completo
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Eres Eduardo Mendoza, un consultor de estrategia tecnológica de alto nivel. 
            Tu estilo es minimalista, analítico y elegante. 
            Responde de forma breve y profunda al siguiente desafío: ${topic}`
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error detallado:", errorData);
      
      // Si el 404 persiste, es posible que tu API Key solo tenga acceso a v1beta
      if (response.status === 404) {
         return "Error 404: El modelo no fue encontrado. Revisa si la API Key tiene habilitado Gemini 1.5 Flash en AI Studio.";
      }
      
      return `Error (${response.status}): ${errorData.error?.message || 'Error desconocido'}`;
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "El Oráculo no pudo procesar la idea.";

  } catch (error: any) {
    return "Error de red: No se pudo conectar con el servicio de IA.";
  }
};
