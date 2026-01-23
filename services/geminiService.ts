export const generateStrategicInsight = async (topic: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData.text || "El servidor no respondió correctamente.";
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error de fetch:", error);
    return "El Oráculo no pudo ser contactado. Revisa tu conexión o el despliegue de la API.";
  }
};
