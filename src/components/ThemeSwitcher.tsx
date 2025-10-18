"use client";

import { useState, useEffect } from "react";

const colorSchemes = [
  {
    name: "Cyber Cyan",
    id: "cyan",
    colors: {
      primary: "#00d4ff",
      primaryLight: "#4de4ff",
      primaryDark: "#00a8cc",
      background: "#030712",
      backgroundSecondary: "#0a0f1a",
      backgroundAccent: "#111827",
    },
  },
  {
    name: "Electric Purple",
    id: "purple",
    colors: {
      primary: "#a855f7",
      primaryLight: "#c084fc",
      primaryDark: "#7e22ce",
      background: "#030203",
      backgroundSecondary: "#0a0512",
      backgroundAccent: "#0f0a18",
    },
  },
  {
    name: "Emerald AI",
    id: "emerald",
    colors: {
      primary: "#10b981",
      primaryLight: "#34d399",
      primaryDark: "#059669",
      background: "#020805",
      backgroundSecondary: "#05100c",
      backgroundAccent: "#0a1812",
    },
  },
  {
    name: "Sunset Orange",
    id: "orange",
    colors: {
      primary: "#f59e0b",
      primaryLight: "#fbbf24",
      primaryDark: "#d97706",
      background: "#080604",
      backgroundSecondary: "#0f0c08",
      backgroundAccent: "#18120e",
    },
  },
  {
    name: "Royal Blue",
    id: "blue",
    colors: {
      primary: "#3b82f6",
      primaryLight: "#60a5fa",
      primaryDark: "#2563eb",
      background: "#020509",
      backgroundSecondary: "#050c15",
      backgroundAccent: "#0a1321",
    },
  },
  {
    name: "Magenta Pink",
    id: "pink",
    colors: {
      primary: "#ec4899",
      primaryLight: "#f472b6",
      primaryDark: "#db2777",
      background: "#060104",
      backgroundSecondary: "#0e050b",
      backgroundAccent: "#160a12",
    },
  },
  {
    name: "Neon Lime",
    id: "lime",
    colors: {
      primary: "#84cc16",
      primaryLight: "#a3e635",
      primaryDark: "#65a30d",
      background: "#030602",
      backgroundSecondary: "#070e05",
      backgroundAccent: "#0d150a",
    },
  },
  {
    name: "Ice Blue",
    id: "ice",
    colors: {
      primary: "#06b6d4",
      primaryLight: "#22d3ee",
      primaryDark: "#0891b2",
      background: "#020507",
      backgroundSecondary: "#050d11",
      backgroundAccent: "#0a141a",
    },
  },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(colorSchemes[0]);

  const applyTheme = (scheme: typeof colorSchemes[0]) => {
    setCurrentTheme(scheme);
    setIsOpen(false);

    // Apply theme to CSS variables
    const root = document.documentElement;
    root.style.setProperty("--primary", scheme.colors.primary);
    root.style.setProperty("--primary-light", scheme.colors.primaryLight);
    root.style.setProperty("--primary-dark", scheme.colors.primaryDark);
    root.style.setProperty("--background", scheme.colors.background);
    root.style.setProperty("--background-secondary", scheme.colors.backgroundSecondary);
    root.style.setProperty("--background-accent", scheme.colors.backgroundAccent);

    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("cubic-labs-theme", scheme.id);
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedThemeId = localStorage.getItem("cubic-labs-theme");
      if (savedThemeId) {
        const savedTheme = colorSchemes.find((s) => s.id === savedThemeId);
        if (savedTheme) {
          applyTheme(savedTheme);
        }
      }
    }
  }, []);

  return (
    <div className="fixed top-20 right-6 z-50">
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3 rounded-full border border-border hover:border-primary bg-background-accent/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Change theme"
      >
        {/* Color Preview Circles */}
        <div className="flex gap-1.5">
          <div
            className="w-4 h-4 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
            style={{ background: currentTheme.colors.primary }}
          ></div>
          <div
            className="w-4 h-4 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
            style={{ background: currentTheme.colors.primaryLight }}
          ></div>
          <div
            className="w-4 h-4 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
            style={{ background: currentTheme.colors.primaryDark }}
          ></div>
        </div>

        <span className="text-sm font-semibold text-foreground">{currentTheme.name}</span>

        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 text-foreground-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown Content */}
          <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-border bg-background-secondary/95 backdrop-blur-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-3 border-b border-border/50">
              <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                Choose Color Theme
              </p>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => applyTheme(scheme)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentTheme.id === scheme.id
                      ? "bg-primary/20 border-2 border-primary shadow-lg"
                      : "bg-background-accent/30 border-2 border-transparent hover:bg-background-accent/60 hover:border-border"
                  }`}
                >
                  {/* Color Preview */}
                  <div className="flex gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full ring-2 ring-white/20"
                      style={{ background: scheme.colors.primary }}
                    ></div>
                    <div
                      className="w-5 h-5 rounded-full ring-2 ring-white/20"
                      style={{ background: scheme.colors.primaryLight }}
                    ></div>
                    <div
                      className="w-5 h-5 rounded-full ring-2 ring-white/20"
                      style={{ background: scheme.colors.primaryDark }}
                    ></div>
                  </div>

                  {/* Theme Name */}
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground text-sm">{scheme.name}</p>
                  </div>

                  {/* Check Icon */}
                  {currentTheme.id === scheme.id && (
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-border/50 bg-background-accent/50">
              <p className="text-xs text-foreground-dim text-center">
                Theme saved automatically
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
