"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration-safe mount guard
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/60 transition-colors hover:border-accent/40 hover:text-accent dark:border-white/15 dark:text-white/60"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm5.66 2.09a.75.75 0 010 1.06l-1.41 1.42a.75.75 0 11-1.06-1.06l1.41-1.42a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2a.75.75 0 010-1.5h2a.75.75 0 01.75.75zM17.66 19.66a.75.75 0 01-1.06 0l-1.41-1.42a.75.75 0 111.06-1.06l1.41 1.42a.75.75 0 010 1.06zM12 18.75a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM7.05 19.66a.75.75 0 010-1.06l1.41-1.42a.75.75 0 111.06 1.06l-1.41 1.42a.75.75 0 01-1.06 0zM4.25 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.05 4.34a.75.75 0 011.06 0l1.41 1.42a.75.75 0 11-1.06 1.06L7.05 5.4a.75.75 0 010-1.06zM12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
}
