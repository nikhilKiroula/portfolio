import { Bot, RotateCcw, Sparkles, X } from "lucide-react";

interface AIChatHeaderProps {
  onClear: () => void;
  onClose: () => void;
}

function AIChatHeader({
  onClear,
  onClose,
}: AIChatHeaderProps) {
  return (
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
        {/* AI avatar */}
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

      <div className="flex items-center gap-1">
        {/* Reset the current conversation. */}
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear chat"
          title="Clear chat"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-[var(--color-text-muted)]
            transition-colors
            hover:bg-[var(--color-surface-hover)]
            hover:text-[var(--color-text)]
          "
        >
          <RotateCcw size={16} />
        </button>

        {/* Close the chatbot window. */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Nikhil AI chatbot"
          className="
            flex
            h-9
            w-9
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
    </div>
  );
}

export default AIChatHeader;