"use client";

export function GitStarButton() {
  return (
    <a
      href="https://github.com/Hari-hara7/Academic-pal.git"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-md border border-white/20 transition-all hover:bg-zinc-900 hover:ring-2 hover:ring-white"
    >
      {/* GitHub Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-white"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.19-3.12-.12-.29-.52-1.45.11-3.01 0 0 .98-.31 3.2 1.19a11.02 11.02 0 012.92-.39c.99.01 1.98.13 2.92.39 2.21-1.5 3.19-1.19 3.19-1.19.64 1.56.24 2.72.12 3.01.74.82 1.19 1.86 1.19 3.12 0 4.42-2.69 5.4-5.25 5.68.41.35.76 1.03.76 2.07v3.07c0 .31.2.67.8.56A11.51 11.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
      </svg>

      {/* Label */}
      <span>Star on GitHub</span>

      {/* Star Count */}
      <div className="flex items-center gap-1 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">2</span>
      </div>
    </a>
  );
}
