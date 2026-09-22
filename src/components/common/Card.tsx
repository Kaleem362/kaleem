import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-zinc-700 hover:bg-zinc-900/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20' : ''
      } ${glow ? 'shadow-lg shadow-cyan-500/5 border-cyan-500/20' : ''} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
