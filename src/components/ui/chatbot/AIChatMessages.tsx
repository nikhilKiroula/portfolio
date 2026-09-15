import { Check, Copy, Pencil, Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

import type { Message } from "./chatbot.types";

interface AIChatMessagesProps {
  messages: Message[];
  suggestedQuestions: string[];
  copiedMessageId: number | null;
  onCopy: (message: Message) => void;
  onEdit: (message: Message) => void;
  onSuggestionSelect: (question: string) => void;
  isLoading: boolean;
}

function AIChatMessages({
  messages,
  suggestedQuestions,
  copiedMessageId,
  onCopy,
  onEdit,
  onSuggestionSelect,
  isLoading,
}: AIChatMessagesProps) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
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
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
                <Sparkles size={14} />
              </div>
            )}

            <div
              className={`flex max-w-[82%] flex-col ${
                isAssistant ? "items-start" : "items-end"
              }`}
            >
              <div
                className={`rounded-2xl px-3.5 py-3 text-sm leading-relaxed ${
                  isAssistant
                    ? "rounded-tl-md bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
                    : "rounded-tr-md bg-[var(--color-primary)] text-white"
                } `}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-3 last:mb-0">{children}</p>
                    ),

                    strong: ({ children }) => (
                      <strong className="font-semibold text-[var(--color-text)]">
                        {children}
                      </strong>
                    ),

                    ul: ({ children }) => (
                      <ul className="mb-3 list-disc space-y-1.5 pl-5 last:mb-0">
                        {children}
                      </ul>
                    ),

                    ol: ({ children }) => (
                      <ol className="mb-3 list-decimal space-y-1.5 pl-5 last:mb-0">
                        {children}
                      </ol>
                    ),

                    li: ({ children }) => <li className="pl-1">{children}</li>,

                    h1: ({ children }) => (
                      <h1 className="mb-2 text-base font-semibold text-[var(--color-text)]">
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="mb-2 text-sm font-semibold text-[var(--color-text)]">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="mb-2 text-sm font-semibold text-[var(--color-text)]">
                        {children}
                      </h3>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>

              {/* Message actions. */}
              <div className="mt-1 flex items-center gap-1">
                {isAssistant ? (
                  <button
                    type="button"
                    onClick={() => onCopy(message)}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                  >
                    {copiedMessageId === message.id ? (
                      <>
                        <Check size={12} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => onEdit(message)}
                      aria-label="Edit message"
                      title="Edit message"
                      className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                    >
                      <Pencil size={13} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onCopy(message)}
                      aria-label="Copy message"
                      title="Copy message"
                      className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                    >
                      {copiedMessageId === message.id ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {!isAssistant && (
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]">
                <User size={14} />
              </div>
            )}
          </div>
        );
      })}

      {isLoading && (
        <div className="flex items-start gap-2.5">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
            <Sparkles size={14} />
          </div>

          <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-[var(--color-surface)] px-4 py-3.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-text-muted)] [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-text-muted)] [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-text-muted)]" />
          </div>
        </div>
      )}

      {/* Show helpful questions before the conversation starts. */}
      {messages.length === 1 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={13} className="text-[var(--color-primary-hover)]" />

            <p className="text-xs font-medium text-[var(--color-text-muted)]">
              Try asking
            </p>
          </div>

          <div className="space-y-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => onSuggestionSelect(question)}
                className="block w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatMessages;
