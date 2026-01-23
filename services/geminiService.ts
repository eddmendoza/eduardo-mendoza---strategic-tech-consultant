export const generateStrategicInsight = async (topic: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();
    // Directamente devolvemos lo que diga el servidor
    return data.text || "Error inesperado en formato de respuesta.";
  } catch (error: any) {
    return "Error de red: No se pudo contactar con /api/chat";
  }
};
