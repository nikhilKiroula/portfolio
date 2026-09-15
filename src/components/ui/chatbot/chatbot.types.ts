// Represents a single message in the chatbot conversation.
export interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}