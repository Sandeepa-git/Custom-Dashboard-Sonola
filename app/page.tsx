"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function WelcomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  // Update document class and localStorage whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center p-4 transition-colors relative">
      {/* Dark/Light toggle outside frame */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-muted dark:bg-gray-700 hover:bg-muted/80 dark:hover:bg-gray-600 transition-colors shadow-lg"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Frame container */}
      <div className="w-full max-w-6xl bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg transition-colors">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch p-8">
          {/* Left Content */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white">
                Welcome to Sonola
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
                With Sonola, making stand-out marketing content is as easy as a few clicks. Let's get started!
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-muted/50 dark:bg-gray-700 rounded-lg p-6 border border-border dark:border-gray-600 transition-colors">
                <p className="text-sm text-foreground dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold text-2xl">63%</span> of marketers say creating engaging content consistently is their biggest challenge.
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400 mt-2">
                  Content Marketing Institute, 2022
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === 3 ? "w-8 bg-primary" : "w-3.5 bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-full">
                    Next
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Illustration with Video */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-800 dark:bg-gray-900 flex items-center justify-center transition-colors">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/original-848c54b44182083599d62428e3ac9ad2 (1).mp4"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <p className="text-white/60 dark:text-gray-400 text-sm font-medium tracking-wider uppercase">
                Sonola
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
