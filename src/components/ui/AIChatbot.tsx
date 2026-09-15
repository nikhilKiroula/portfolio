import { useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hey! 👋 I'm Nikhil's AI assistant. Ask me about his skills, projects, experience, or tech stack.",
  },
];

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    // Ignore empty messages until the real AI backend is connected.
    if (!trimmedInput) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");

    // Temporary response for the UI phase.
    // This will be replaced with the real AI API response later.
    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "I'm currently a UI demo. The AI backend will be connected in the next phase. 🤖",
        },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Floating chatbot button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Nikhil AI chatbot"
          className="
            fixed
            bottom-5
            right-5
            z-[60]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            text-[var(--color-text)]
            shadow-[var(--shadow-primary)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--color-primary)]
            hover:bg-[var(--color-primary)]
            hover:shadow-[0_0_35px_rgba(124,58,237,0.3)]
            sm:bottom-6
            sm:right-6
          "
        >
          <MessageCircle size={23} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="
            fixed
            inset-x-4
            bottom-4
            z-[60]
            flex
            h-[min(620px,calc(100svh-2rem))]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-bg-secondary)]
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            sm:inset-x-auto
            sm:bottom-6
            sm:right-6
            sm:h-[620px]
            sm:w-[390px]
            sm:rounded-3xl
          "
        >
          {/* Chat header */}
          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              border-b
              border-[var(--color-border)]
              bg-[rgba(17,17,24,0.92)]
              px-4
              py-4
              backdrop-blur-xl
              sm:px-5
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--color-primary)]
                  text-white
                  shadow-[var(--shadow-primary)]
                "
              >
                <Bot size={21} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="truncate text-sm font-semibold text-[var(--color-text)]">
                    Nikhil AI
                  </h2>

                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-[var(--color-success)]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
                    Online
                  </span>
                </div>

                <p className="text-xs text-[var(--color-text-muted)]">
                  Ask about Nikhil
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Nikhil AI chatbot"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-[var(--color-text-muted)]
                transition-colors
                hover:bg-[var(--color-surface-hover)]
                hover:text-[var(--color-text)]
              "
            >
              <X size={19} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="
              flex-1
              space-y-4
              overflow-y-auto
              px-4
              py-5
              sm:px-5
            "
          >
            {messages.map((message) => {
              const isAssistant = message.role === "assistant";

              return (
                <div
                  key={message.id}
                  className={`flex gap-2.5 ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAssistant && (
                    <div
                      className="
                        mt-1
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[var(--color-primary)]
                        text-white
                      "
                    >
                      <Sparkles size={14} />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[82%]
                      rounded-2xl
                      px-3.5
                      py-3
                      text-sm
                      leading-relaxed
                      ${
                        isAssistant
                          ? "rounded-tl-md bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
                          : "rounded-tr-md bg-[var(--color-primary)] text-white"
                      }
                    `}
                  >
                    {message.content}
                  </div>

                  {!isAssistant && (
                    <div
                      className="
                        mt-1
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-surface)]
                        text-[var(--color-text-secondary)]
                      "
                    >
                      <User size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Chat input */}
          <div
            className="
              shrink-0
              border-t
              border-[var(--color-border)]
              bg-[rgba(11,11,16,0.96)]
              p-3
              sm:p-4
            "
          >
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                className="
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  px-3.5
                  py-3
                  text-sm
                  text-[var(--color-text)]
                  outline-none
                  placeholder:text-[var(--color-text-muted)]
                  transition-colors
                  focus:border-[var(--color-primary)]
                "
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim()}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--color-primary)]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[var(--color-primary-hover)]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <Send size={17} />
              </button>
            </form>

            <p className="mt-2 text-center text-[10px] text-[var(--color-text-muted)]">
              AI-powered portfolio assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default AIChatbot;