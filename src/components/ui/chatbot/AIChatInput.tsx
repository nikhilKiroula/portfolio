import { useEffect, useRef } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface AIChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  isEditing: boolean;
}

function AIChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  isEditing,
}: AIChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    // Reset the height first so the textarea can shrink when text is removed.
    textarea.style.height = "auto";

    // Grow the textarea according to its content.
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  }, [value]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends the message, while Shift + Enter creates a new line.
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      // Prevent another request while the AI is responding.
      if (!isLoading && value.trim()) {
        event.currentTarget.form?.requestSubmit();
      }
    }
  };

  return (
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
      <form onSubmit={onSubmit}>
        <div
          className="
            flex
            items-end
            gap-2
            rounded-xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-1.5
            transition-colors
            focus-within:border-[var(--color-primary)]
          "
        >
          {/* Auto-growing message textarea. */}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isLoading
                ? "AI is thinking..."
                : isEditing
                  ? "Edit your message..."
                  : "Ask me anything..."
            }
            disabled={isLoading}
            rows={1}
            aria-label="Message"
            className="
              max-h-32
              min-h-10
              min-w-0
              flex-1
              resize-none
              overflow-y-auto
              bg-transparent
              px-2.5
              py-2
              text-sm
              leading-5
              text-[var(--color-text)]
              outline-none
              placeholder:text-[var(--color-text-muted)]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />

          {/* Send button. */}
          <button
            type="submit"
            aria-label="Send message"
            disabled={!value.trim() || isLoading}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-[var(--color-primary)]
              text-white
              transition-all
              duration-200
              hover:bg-[var(--color-primary-hover)]
              hover:shadow-[var(--shadow-primary)]
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:shadow-none
            "
          >
            <Send size={16} />
          </button>
        </div>
      </form>

      {/* Explain the current input mode and keyboard shortcuts. */}
      <div className="mt-2 flex items-center justify-between px-1">
        <p className="text-[10px] text-[var(--color-text-muted)]">
          {isEditing ? "Editing message" : "AI-powered portfolio assistant"}
        </p>

        <p className="hidden text-[10px] text-[var(--color-text-muted)] sm:block">
          Enter to send · Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}

export default AIChatInput;