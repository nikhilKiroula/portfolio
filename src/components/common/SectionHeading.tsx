interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {/* Small label that identifies the current portfolio section. */}
      <p
        className="
          mb-3
          font-mono
          text-sm
          font-medium
          uppercase
          tracking-wider
          text-[var(--color-primary)]
        "
      >
        {eyebrow}
      </p>

      {/* Main heading for the section. */}
      <h2
        className="
          text-3xl
          font-bold
          tracking-tight
          text-[var(--color-text)]
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {/* Optional supporting description. */}
      {description && (
        <p
          className="
            mt-4
            text-base
            leading-7
            text-[var(--color-text-secondary)]
            sm:text-lg
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;