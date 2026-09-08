"use client";

import { useState } from "react";
import { useBackground } from "@/context/BackgroundContext";

export default function BackgroundToggle() {
  const { showBackground, bgOpacity, toggleBackground, setOpacity } =
    useBackground();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600/90 hover:bg-red-500 text-white p-3 rounded-full shadow-[0_0_24px_rgba(255,49,49,0.35)] border border-white/10 backdrop-blur-md"
        title="3D Background Settings"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-3 glass-card border-red-500/20 p-4 w-64 shadow-2xl">
          <h3 className="text-white font-medium mb-3 text-sm tracking-wide">
            3D Background
          </h3>

          <div className="flex items-center mb-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showBackground}
                onChange={() => toggleBackground(!showBackground)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              <span className="ms-3 text-sm font-medium text-zinc-300">
                Enable scene
              </span>
            </label>
          </div>

          {showBackground && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                Opacity
              </label>
              <input
                type="range"
                min="0.05"
                max="0.4"
                step="0.01"
                value={bgOpacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>Subtle</span>
                <span>Vivid</span>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="mt-3 text-xs text-zinc-500 hover:text-white underline"
            type="button"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
