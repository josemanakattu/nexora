import React from 'react';

interface NexoraLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
  showSubtitle?: boolean;
  subtitleText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
  subtitleText = 'QUALITY SYSTEMS WLL',
  size = 'md'
}) => {
  // Scale dimensions based on size prop
  const sizeMap = {
    sm: { markSize: 32, titleClass: 'text-base font-bold tracking-wider', subClass: 'text-[9px] font-semibold tracking-widest' },
    md: { markSize: 44, titleClass: 'text-xl font-extrabold tracking-widest', subClass: 'text-[11px] font-medium tracking-widest' },
    lg: { markSize: 64, titleClass: 'text-2xl font-black tracking-widest', subClass: 'text-xs font-semibold tracking-widest' },
    xl: { markSize: 88, titleClass: 'text-4xl font-black tracking-widest', subClass: 'text-sm font-semibold tracking-widest' },
  };

  const currentSize = sizeMap[size];

  // Colors
  const yellowColor = '#FCC000'; // Exact Nexora Brand Golden Yellow
  const darkCharcoal = variant === 'dark' ? '#F3F4F6' : '#383838';
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#111827';
  const subTitleColor = variant === 'dark' ? '#9CA3AF' : '#4B5563';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* ISO-Metric N/Q Geometric Logo SVG matching exact brand reference image */}
      <svg
        width={currentSize.markSize}
        height={currentSize.markSize}
        viewBox="0 0 410 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Yellow/Gold Primary Isometric Structure (Bottom-Left) */}
        <path
          d="M 70,80 L 338,227.4 L 338,265.4 L 158,166.4 L 158,260 L 124,241.3 L 124,147.7 L 104,136.7 L 104,218.7 L 70,200 Z"
          fill={yellowColor}
        />

        {/* Charcoal/Dark Top Isometric Structure (Top-Right, 180° Rotational Symmetry) */}
        <path
          d="M 338,214 L 70,66.6 L 70,28.6 L 250,127.6 L 250,34 L 284,52.7 L 284,146.3 L 304,157.3 L 304,75.3 L 338,94 Z"
          fill={darkCharcoal}
        />
      </svg>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`${currentSize.titleClass}`} style={{ color: titleColor, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          NEXORA
        </span>
        {showSubtitle && (
          <span className={`${currentSize.subClass} mt-1 uppercase font-semibold`} style={{ color: subTitleColor }}>
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};
