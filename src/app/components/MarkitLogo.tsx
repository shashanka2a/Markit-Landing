interface MarkitLogoProps {
  className?: string;
  variant?: 'default' | 'mono' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function MarkitLogo({ className = "", variant = 'default', size = 'md' }: MarkitLogoProps) {
  const sizeClasses = {
    sm: 'w-32 h-12',
    md: 'w-48 h-16',
    lg: 'w-64 h-22',
    xl: 'w-96 h-32'
  };

  const getColors = () => {
    switch (variant) {
      case 'mono':
        return {
          primary: 'currentColor',
          secondary: 'currentColor',
          accent: 'currentColor'
        };
      case 'white':
        return {
          primary: '#ffffff',
          secondary: '#e2e8f0',
          accent: '#cbd5e1'
        };
      default:
        return {
          primary: 'url(#gradient1)',
          secondary: 'url(#gradient2)',
          accent: 'url(#gradient3)'
        };
    }
  };

  const colors = getColors();

  return (
    <svg 
      viewBox="0 0 320 80" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === 'default' && (
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      )}
      
      {/* Icon Mark */}
      <g transform="translate(0, 10)">
        {/* Outer circle */}
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="none" 
          stroke={colors.primary} 
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Inner geometric shape - representing unity/hub */}
        <polygon 
          points="30,15 42,25 42,35 30,45 18,35 18,25" 
          fill={colors.secondary}
          opacity="0.9"
        />
        
        {/* Center dot */}
        <circle 
          cx="30" 
          cy="30" 
          r="4" 
          fill={colors.accent}
        />
        
        {/* Connection points */}
        <circle cx="30" cy="15" r="2" fill={colors.primary} />
        <circle cx="42" cy="25" r="2" fill={colors.primary} />
        <circle cx="42" cy="35" r="2" fill={colors.primary} />
        <circle cx="30" cy="45" r="2" fill={colors.primary} />
        <circle cx="18" cy="35" r="2" fill={colors.primary} />
        <circle cx="18" cy="25" r="2" fill={colors.primary} />
      </g>
      
      {/* Text */}
      <g transform="translate(75, 20)">
        <text 
          x="0" 
          y="30" 
          fill={colors.primary}
          fontSize="32"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.02em"
        >
          Markit
        </text>
        <text 
          x="96" 
          y="30" 
          fill={colors.accent}
          fontSize="32"
          fontWeight="300"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          .one
        </text>
      </g>
    </svg>
  );
}