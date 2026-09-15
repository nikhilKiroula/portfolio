import { Sparkles } from "lucide-react";

interface AIChatLauncherProps {
  onClick: () => void;
}

function AIChatLauncher({ onClick }: AIChatLauncherProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open Nikhil AI chatbot"
      className="
        group
        fixed
        right-5
        bottom-5
        z-[60]
        flex
        items-center
        gap-2.5
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-4
        py-3
        text-[var(--color-text)]
        shadow-[var(--shadow-primary)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--color-primary)]
        hover:bg-[var(--color-primary)]
        hover:shadow-[0_0_35px_rgba(124,58,237,0.3)]
        sm:right-6
        sm:bottom-6
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-xl
          bg-[rgba(124,58,237,0.15)]
          text-[var(--color-primary-hover)]
          transition-colors
          group-hover:bg-white/15
          group-hover:text-white
        "
      >
        <Sparkles size={17} />
      </span>

      <span className="text-left">
        <span className="block text-xs font-medium text-[var(--color-text-muted)] group-hover:text-white/70">
          AI Assistant
        </span>

        <span className="block text-sm font-semibold">
          Ask Nikhil AI
        </span>
      </span>
    </button>
  );
}

export default AIChatLauncher;