import type { FormEvent } from "react";
import { Send } from "lucide-react";

interface AIChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function AIChatInput({
  value,
  onChange,
  onSubmit,
}: AIChatInputProps) {
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
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
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
          disabled={!value.trim()}
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
  );
}

export default AIChatInput;