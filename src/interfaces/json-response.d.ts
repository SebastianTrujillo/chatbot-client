export interface JsonResponse {
  status: number;
  message: string;
  description: string;
  data: OpenaiAnswer;
};

export interface OpenaiAnswer {
  role: string;
  content: string;
}
