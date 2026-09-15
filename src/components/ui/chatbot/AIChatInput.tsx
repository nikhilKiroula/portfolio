import type { FormEvent } from "react";
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
  return (
    <div className="shrink-0 border-t border-[var(--color-border)] bg-[rgba(11,11,16,0.96)] p-3 sm:p-4">
      <form onSubmit={onSubmit} className="flex gap-2">
        {/* User message input. Disabled while AI is responding. */}
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={
            isLoading
              ? "AI is thinking..."
              : isEditing
                ? "Edit your message..."
                : "Ask me anything..."
          }
          disabled={isLoading}
          className="min-w-0 flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-3 text-sm text-[var(--color-text)] transition-colors outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
        />

        {/* Send button. Disabled when input is empty or AI is responding. */}
        <button
          type="submit"
          aria-label="Send message"
          disabled={!value.trim() || isLoading}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          <Send size={17} />
        </button>
      </form>

      {/* Small footer text below the input. */}
      <p className="mt-2 text-center text-[10px] text-[var(--color-text-muted)]">
        AI-powered portfolio assistant
      </p>
    </div>
  );
}

export default AIChatInput;
