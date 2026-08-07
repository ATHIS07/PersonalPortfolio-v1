'use client';

import React, { useEffect, useState } from 'react';

interface TerminalTyperProps {
  command: string;
}

export default function TerminalTyper({ command }: TerminalTyperProps) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayText('');

    const typingInterval = setInterval(() => {
      if (index < command.length) {
        setDisplayText(command.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [command]);

  return (
    <div className="font-mono text-[10px] text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800/80 truncate max-w-[240px] flex items-center gap-1 shadow-inner">
      <span>{displayText}</span>
      <span
        className={`inline-block w-1.5 h-3 bg-emerald-400 rounded-sm transition-opacity duration-100 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
