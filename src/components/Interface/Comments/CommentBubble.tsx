import { useEffect, useRef } from "react";
import { birthdayConfig } from "../../../config/birthday";

interface CommentBubbleProps {
  text: string;
  author: string;
  position: { x: number; y: number };
}

export function CommentBubble({ text, author, position }: CommentBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = bubbleRef.current;
    if (!element) return;

    let currentY = position.y;
    const targetY = -200; // Float up and disappear above the viewport
    const speed = Math.random() * 0.5 + 0.3; // Random speed between 0.3 and 0.8
    let opacity = 1;

    const animate = () => {
      if (!element) return;

      currentY -= speed;
      opacity = Math.max(0, (currentY - targetY) / (position.y - targetY));

      element.style.transform = `translate(${
        position.x
      }px, ${currentY}px) scale(${0.8 + opacity * 0.2})`;
      element.style.opacity = opacity.toString();

      if (currentY > targetY) {
        requestAnimationFrame(animate);
      } else {
        element.remove();
      }
    };

    requestAnimationFrame(animate);
  }, [position]);

  return (
    <div
      ref={bubbleRef}
      className="fixed pointer-events-none transition-transform duration-300"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="bg-black/40 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-xs"
        style={{
          border: `2px solid ${birthdayConfig.colors.primary}`,
          boxShadow: `0 0 15px ${birthdayConfig.colors.primary}30`,
        }}
      >
        <p className="text-white mb-2 leading-relaxed">{text}</p>
        <p
          className="text-sm font-medium"
          style={{ color: birthdayConfig.colors.accent }}
        >
          - {author}
        </p>
      </div>
    </div>
  );
}
