function App() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-8">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center">
        <div
          className="
            rounded-[var(--radius-xl)]
            border border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-10
            shadow-[var(--shadow-primary)]
          "
        >
          <p
            className="
              mb-3
              font-mono
              text-sm
              text-[var(--color-primary)]
            "
          >
            // FULL STACK DEVELOPER
          </p>

          <h1 className="text-4xl font-bold text-[var(--color-text)]">
            Nikhil's Portfolio
          </h1>

          <p className="mt-3 text-[var(--color-text-secondary)]">
            AI-powered developer portfolio.
          </p>

          <button
            className="
              mt-6
              rounded-lg
              bg-[var(--color-primary)]
              px-5
              py-3
              font-medium
              text-white
              transition-colors
              hover:bg-[var(--color-primary-hover)]
            "
          >
            Explore Portfolio
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;