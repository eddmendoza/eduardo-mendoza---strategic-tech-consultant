export const generateStrategicInsight = async (topic: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();

    if (!response.ok) {
      return data.error || "Error en la consulta";
    }

    return data.text;
  } catch (error) {
    console.error("Error en frontend:", error);
    return "No se pudo conectar con el servidor del Oráculo.";
  }
};
