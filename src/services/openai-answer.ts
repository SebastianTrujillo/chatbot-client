import axios from "axios";
import { JsonResponse } from '../interfaces/json-response';

export const openaiAnswer = async (message: string): Promise<JsonResponse | undefined> => {
  try {
    const requestBody = { question: message };
    const response = await axios.post(`${import.meta.env.VITE_CHATBOT_API}/openai-answer`, requestBody);
    return (response.data);
  } catch (error) {
    console.error(`OpenaiAnswer service | ${error}`);
    return (undefined);
  }
};
