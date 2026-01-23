export const generateStrategicInsight = async (topic: string): Promise<string> => {
  try {
    // Ya no usamos import.meta.env aquí porque la llave vive en el servidor
    // Llamamos a nuestra propia API interna de Vercel
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error('Error en la comunicación con el servidor');
    }

    const data = await response.json();
    
    // Devolvemos el texto que nos mandó nuestra función en /api/chat.ts
    return data.text || "El Oráculo no pudo procesar la respuesta.";

  } catch (error) {
    console.error("Error en el servicio frontal:", error);
    return "Conexión interrumpida con el Oráculo. Intenta de nuevo.";
  }
};
