// src/app/components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    // Validate savedTheme is "light" or "dark"
    const isValidTheme = savedTheme === "light" || savedTheme === "dark";
    // Determine initial theme: savedTheme (if valid), prefers-color-scheme, or "light"
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: "light" | "dark" = isValidTheme ? savedTheme : prefersDark ? "dark" : "light";
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}