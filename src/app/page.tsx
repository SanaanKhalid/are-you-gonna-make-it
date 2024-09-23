"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const subtitles = ["Shii Maybe", "No", "Hell no", "fuck no", "today is the day you will", "Yes", "You will", "You won't", "Nah you're overly fucked", "Lowkey nah", 
    "Yes inshallah", "Only if Zain does", "no go work 9-5", "depends how hard you work today"];

  const getRandomSubtitle = () => {
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    return subtitles[randomIndex];
  };

  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    setSubtitle(getRandomSubtitle());
  }, []);

  const changeSubtitle = () => {
    setSubtitle(getRandomSubtitle());
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        changeSubtitle();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", changeSubtitle);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", changeSubtitle);
    };
  }, []);

  const handleHiClick = () => {
    alert("HI THERE!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-red-600 text-white uppercase font-black">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-6xl mb-4">ARE YOU GOING TO MAKE IT?</h1>
        <h2 className="text-5xl">{subtitle ? subtitle.toUpperCase() : ''}</h2>
        <p className="text-xl mt-4">PRESS SPACE OR CLICK ANYWHERE TO CHANGE THE ANSWER</p>
    
      </main>
    </div>
  );
}
