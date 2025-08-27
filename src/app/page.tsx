"use client";

import { useState } from "react";

export default function Page() {
  const [reduceMotion, setReduceMotion] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQuality, setHighQuality] = useState(false);
  const [language, setLanguage] = useState("English");
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const [accentColor, setAccentColor] = useState("blue");

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white w-[420px] p-6 rounded-2xl shadow-md text-black">
        {/* Header */}
        <header className="mb-6">
          <h1 className="font-semibold text-lg">Appearance</h1>
          <p className="text-sm text-gray-600">
            Set or customize your preferences for the system
          </p>
        </header>

        {/* Language */}
        <section className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <label
                htmlFor="language"
                className="block font-medium text-sm mb-1 text-black"
              >
                Language
              </label>
              <p className="text-xs text-gray-600">
                Select the language of the platform
              </p>
            </div>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select language"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </section>

        {/* Interface theme */}
        <section className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="font-medium text-sm mb-1 text-black">Interface theme</h2>
          <p className="text-xs text-gray-600 mb-3">
            Customize your application appearance
          </p>
          <div className="flex gap-3">
            {["Auto", "Light", "Dark"].map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setSelectedTheme(theme)}
                className={`flex-1 border rounded-lg p-2 text-xs flex flex-col items-center hover:bg-gray-50 ${
                  selectedTheme === theme 
                    ? "border-blue-500 ring-2 ring-blue-500" 
                    : "border-gray-300"
                }`}
                aria-label={`${theme} theme`}
              >
                <span
                  className={`w-full h-14 rounded-md mb-1 ${
                    theme === "Auto"
                      ? "bg-gradient-to-r from-gray-200 to-gray-400"
                      : theme === "Light"
                      ? "bg-gray-100"
                      : "bg-gray-800"
                  }`}
                ></span>
                {theme}
              </button>
            ))}
          </div>
        </section>

        {/* Accent color */}
        <section className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="font-medium text-sm mb-1 text-black">Accent color</h2>
          <p className="text-xs text-gray-600 mb-3">
            Pick your platform&apos;s main color
          </p>
          <div className="flex gap-2 flex-wrap">
            {[
              {color: "red", bg: "bg-red-400"},
              {color: "orange", bg: "bg-orange-400"},
              {color: "amber", bg: "bg-amber-400"},
              {color: "green", bg: "bg-green-400"},
              {color: "blue", bg: "bg-blue-400"},
              {color: "purple", bg: "bg-purple-400"},
            ].map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setAccentColor(item.color)}
                aria-label={`${item.color} accent color`}
                className={`w-8 h-8 ${item.bg} border border-gray-300 rounded-full cursor-pointer ${
                  accentColor === item.color ? "ring-2 ring-offset-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </section>

        {/* Toggles */}
        <section className="space-y-4 mb-6">
          {/* Reduce motion */}
          <div className="flex items-center justify-between text-sm text-black ">
            <label
              htmlFor="reduceMotion"
              className="flex items-center gap-2 cursor-pointer"
            >
              Reduce motion
            </label>
            <div className="relative inline-block w-12 h-6">
              <input
                id="reduceMotion"
                type="checkbox"
                checked={reduceMotion}
                onChange={() => setReduceMotion(!reduceMotion)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                reduceMotion ? "bg-blue-500" : "bg-gray-300"
              }`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                reduceMotion ? "transform translate-x-6" : ""
              }`}></div>
            </div>
          </div>

          {/* Auto play */}
          <div className="flex items-center justify-between text-sm text-black">
            <label
              htmlFor="autoPlay"
              className="flex items-center gap-2 cursor-pointer"
            >
              Auto play
            </label>
            <div className="relative inline-block w-12 h-6">
              <input
                id="autoPlay"
                type="checkbox"
                checked={autoPlay}
                onChange={() => setAutoPlay(!autoPlay)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                autoPlay ? "bg-blue-500" : "bg-gray-300"
              }`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                autoPlay ? "transform translate-x-6" : ""
              }`}></div>
            </div>
          </div>

          {/* High quality photo */}
          <div className="flex items-center justify-between text-sm text-black">
            <label
              htmlFor="highQuality"
              className="flex items-center gap-2 cursor-pointer"
            >
              High quality photo
            </label>
            <div className="relative inline-block w-12 h-6">
              <input
                id="highQuality"
                type="checkbox"
                checked={highQuality}
                onChange={() => setHighQuality(!highQuality)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                highQuality ? "bg-blue-500" : "bg-gray-300"
              }`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                highQuality ? "transform translate-x-6" : ""
              }`}></div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Buttons */}
        <footer className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 text-sm text-black hover:underline"
          >
            Reset to default
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-black hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
            >
              Save Preferences
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}