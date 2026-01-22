export const generateStrategicInsight = async (topic: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    return "Error: API Key no configurada.";
  }

  // URL corregida: Aseguramos que el endpoint sea el correcto para v1beta
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
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error detallado de Google API:", errorData);
      
      // Si el error es 400 o 404, Google nos dirá por qué en el JSON
      return `Error (${response.status}): ${errorData.error?.message || 'Revisa la consola'}`;
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta del Oráculo.";

  } catch (error: any) {
    console.error("Error en fetch:", error);
    return "Error de red al conectar con el Oráculo.";
  }
};
