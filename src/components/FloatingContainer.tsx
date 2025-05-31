// filepath: d:\Coden\portfolio\src\components\FloatingContainer.tsx
import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface FloatingContainerProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees
  perspective?: number; // Perspective value for 3D effect
  scale?: number; // Hover scale factor
  speed?: number; // Transition speed in ms
  glassOpacity?: number; // Opacity of the glass effect (0-1)
  glassBlur?: number; // Blur amount in pixels
}

const FloatingContainer = ({
  children,
  className = "",
  maxTilt = 10,
  perspective = 1000,
  scale = 1.05,
  speed = 400,
  glassOpacity = 0.5,
  glassBlur = 8,
}: FloatingContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  // Mouse position state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovering) return;

    const element = containerRef.current;
    const rect = element.getBoundingClientRect();

    // Calculate mouse position relative to the element
    const x = e.clientX - rect.left; // Offset for better centering
    const y = e.clientY - rect.top; // Offset for better centering

    // Calculate percentage position
    const xPercent = (x / rect.width) * 2 - 1; // -1 to 1
    const yPercent = (y / rect.height) * 2 - 1; // -1 to 1

    setPosition({ x: xPercent, y: yPercent });
  };

  useEffect(() => {
    if (isHovering) {
      // Calculate tilt based on mouse position
      const tiltX = position.y * maxTilt * -1; // Inverted for natural feel
      const tiltY = position.x * maxTilt;

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      });
    } else {
      // Reset tilt when not hovering
      setTiltStyle({
        transform:
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      });
    }
  }, [isHovering, position, maxTilt, perspective, scale, speed]);
  return (
    <div
      ref={containerRef}
      className={`floating-container relative overflow-hidden rounded-xl shadow-xl 
                 ${className}`}
      style={{
        ...(tiltStyle as React.CSSProperties),
        backdropFilter: `blur(${glassBlur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${glassOpacity})`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full">{children}</div>
    </div>
  );
};

export default FloatingContainer;
