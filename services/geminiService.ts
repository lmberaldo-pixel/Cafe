
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o "Maitá Sommelier", um assistente virtual especialista em cafés artesanais da marca Café Maitá, de Manduri-SP.
O Café Maitá é 100% Arábica, produzido artesanalmente na região da Floresta Estadual e do Horto Florestal de Manduri.
Sua missão é ajudar os clientes com:
1. Dicas de preparo (Hario V60, Prensa Francesa, Espresso, Coador de Pano).
2. Curiosidades sobre a região de Manduri e a ave Maritaca (inspiração do nome).
3. Sugestões de harmonização.
Seja sempre cordial, use um tom acolhedor e rural, mas profissional. Se perguntarem sobre preços ou compras, mencione que temos pacotes de 500g (Grãos ou Moído) e direcione-os para o botão de WhatsApp.
Mantenha as respostas curtas e objetivas.
`;

export const getCoffeeAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
      },
    });
    return response.text || "Desculpe, tive um pequeno problema ao processar seu pedido. Mas que tal um café agora?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou descansando no Horto Florestal agora. Tente me perguntar algo novamente em instantes!";
  }
};
