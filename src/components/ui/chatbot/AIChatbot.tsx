import { useState } from "react";

import AIChatHeader from "./AIChatHeader";
import AIChatInput from "./AIChatInput";
import AIChatLauncher from "./AIChatLauncher";
import AIChatMessages from "./AIChatMessages";
import type { Message } from "./chatbot.types";

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hey! 👋 I'm Nikhil's AI assistant. Ask me about his skills, projects, experience, or tech stack.",
  },
];

const suggestedQuestions = [
  "Tell me about Nikhil's projects",
  "What technologies does Nikhil use?",
  "Tell me about ShopAI",
  "Tell me about Nikhil's training",
];

function AIChatbot() {
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = async (message: Message) => {
    try {
      await navigator.clipboard.writeText(message.content);

      setCopiedMessageId(message.id);

      // Remove the copied indicator after a short delay.
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy message:", error);
    }
  };

  const handleEdit = (message: Message) => {
    // Put the selected message into the input for editing.
    setInput(message.content);

    // Remember which message is currently being edited.
    setEditingMessageId(message.id);
  };

  const handleClearChat = () => {
    // Reset the conversation to the initial assistant message.
    setMessages(initialMessages);

    // Clear the input field.
    setInput("");

    // Reset copied message state.
    setCopiedMessageId(null);

    // Exit edit mode if a message was being edited.
    setEditingMessageId(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    // Ignore empty messages.
    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    };

    // If editing an existing message, remove that message
    // and everything that came after it.
    if (editingMessageId !== null) {
      setMessages((previous) => {
        const messageIndex = previous.findIndex(
          (message) => message.id === editingMessageId,
        );

        if (messageIndex === -1) {
          return [...previous, userMessage];
        }

        return [...previous.slice(0, messageIndex), userMessage];
      });

      setEditingMessageId(null);
    } else {
      // Show a new user message immediately.
      setMessages((previous) => [...previous, userMessage]);
    }

    setInput("");

    try {
      // Show loading state while waiting for the AI response.
      setIsLoading(true);

      // Send the user's message to the backend AI endpoint.
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to get AI response.");
      }

      // Add the fresh AI response to the conversation.
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error("Chat request failed:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred.";

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: `Error: ${errorMessage}`,
        },
      ]);
    } finally {
      // Always stop the loading state after the request finishes.
      setIsLoading(false);
    }
  };

  const handleSuggestionSelect = (question: string) => {
    // Put the selected suggestion into the input so the user can review it.
    setInput(question);
  };

  return (
    <>
      {!isOpen && <AIChatLauncher onClick={() => setIsOpen(true)} />}

      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 z-[60] flex h-[min(620px,calc(100svh-2rem))] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:h-[620px] sm:w-[390px] sm:rounded-3xl">
          <AIChatHeader
            onClear={handleClearChat}
            onClose={() => setIsOpen(false)}
          />

          <AIChatMessages
            messages={messages}
            suggestedQuestions={suggestedQuestions}
            copiedMessageId={copiedMessageId}
            onCopy={handleCopy}
            onEdit={handleEdit}
            onSuggestionSelect={handleSuggestionSelect}
            isLoading={isLoading}
          />

          <AIChatInput
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isEditing={editingMessageId !== null}
          />
        </div>
      )}
    </>
  );
}

export default AIChatbot;
