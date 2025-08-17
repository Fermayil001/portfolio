import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string; // əlavə stil üçün
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, index + 1));
      setIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return (
    <h5 className={`inline-flex ${className}`}>
      {displayedText}
      <span
        style={{
          width: '2px',
          backgroundColor: 'currentColor', // text rəngi ilə uyğunlaşır
          marginLeft: '2px',
          animation: 'blink 1s step-end infinite',
        }}
      ></span>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </h5>
  );
};

export default Typewriter;
