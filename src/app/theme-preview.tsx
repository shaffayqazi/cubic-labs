"use client";

import { useState } from "react";

const colorSchemes = [
  {
    name: "Cyber Cyan",
    id: "cyan",
    description: "Modern, Tech-Forward, AI-Focused",
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
    description: "Creative, Premium, Innovative",
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
    description: "Growth, Trust, Sustainability",
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
    description: "Energetic, Creative, Approachable",
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
    description: "Professional, Corporate, Trustworthy",
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
    description: "Modern, Bold, Eye-catching",
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
    description: "Fresh, Innovative, High-Energy",
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
    description: "Clean, Minimal, Sophisticated",
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

export default function ThemePreview() {
  const [selectedTheme, setSelectedTheme] = useState(colorSchemes[0]);

  const applyTheme = (scheme: typeof colorSchemes[0]) => {
    setSelectedTheme(scheme);
    // This will be shown in the preview, but user needs to manually update globals.css
  };

  const copyToClipboard = () => {
    const cssCode = `
--primary: ${selectedTheme.colors.primary};
--primary-light: ${selectedTheme.colors.primaryLight};
--primary-dark: ${selectedTheme.colors.primaryDark};

--background: ${selectedTheme.colors.background};
--background-secondary: ${selectedTheme.colors.backgroundSecondary};
--background-accent: ${selectedTheme.colors.backgroundAccent};
`.trim();

    navigator.clipboard.writeText(cssCode);
    alert("CSS copied to clipboard! Paste it in globals.css :root section");
  };

  return (
    <div className="min-h-screen p-8" style={{ background: selectedTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: selectedTheme.colors.primary }}>
          Choose Your Color Scheme
        </h1>
        <p className="text-white/70 mb-8">
          Select a theme below to preview. Click &ldquo;Copy CSS&rdquo; to get the code for globals.css
        </p>

        {/* Theme Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {colorSchemes.map((scheme) => (
            <button
              key={scheme.id}
              onClick={() => applyTheme(scheme)}
              className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                selectedTheme.id === scheme.id
                  ? "border-white shadow-xl"
                  : "border-white/20 hover:border-white/40"
              }`}
              style={{ background: scheme.colors.backgroundSecondary }}
            >
              <div className="flex gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: scheme.colors.primary }}
                ></div>
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: scheme.colors.primaryLight }}
                ></div>
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: scheme.colors.primaryDark }}
                ></div>
              </div>
              <h3 className="font-bold text-white mb-1">{scheme.name}</h3>
              <p className="text-sm text-white/60">{scheme.description}</p>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div
          className="p-8 rounded-2xl border-2 mb-8"
          style={{
            background: selectedTheme.colors.backgroundSecondary,
            borderColor: selectedTheme.colors.primary + "40",
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: selectedTheme.colors.primary }}>
            {selectedTheme.name} Preview
          </h2>
          <p className="text-white/70 mb-6">{selectedTheme.description}</p>

          {/* Sample Elements */}
          <div className="space-y-4">
            <button
              className="px-6 py-3 rounded-full font-semibold text-white"
              style={{
                background: `linear-gradient(to right, ${selectedTheme.colors.primary}, ${selectedTheme.colors.primaryLight})`,
              }}
            >
              Primary Button
            </button>

            <div
              className="p-4 rounded-xl border"
              style={{
                background: selectedTheme.colors.backgroundAccent,
                borderColor: selectedTheme.colors.primary + "30",
              }}
            >
              <h3 className="font-bold text-white mb-2">Sample Card</h3>
              <p className="text-white/60">This is how your cards will look with this theme.</p>
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <div className="text-center">
          <button
            onClick={copyToClipboard}
            className="px-8 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-all"
            style={{
              background: `linear-gradient(to right, ${selectedTheme.colors.primary}, ${selectedTheme.colors.primaryLight})`,
            }}
          >
            📋 Copy CSS for &ldquo;{selectedTheme.name}&rdquo;
          </button>
          <p className="text-white/50 mt-4 text-sm">
            After copying, paste it in <code className="bg-white/10 px-2 py-1 rounded">src/app/globals.css</code> :root section
          </p>
        </div>
      </div>
    </div>
  );
}
