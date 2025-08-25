import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ size = 64, showText = true, variant = 'dark' }) => {
  const color = variant === 'dark' ? '#0066ff' : '#ffffff';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={size} height={size} viewBox="0 0 64 64">
        {/* Back crystal - simulation (filled) */}
        <g>
          <polygon 
            points="26,12 38,20 38,32 26,40 14,32 14,20" 
            fill={color}
            opacity="0.2"
          />
          <polygon 
            points="26,12 38,20 38,32 26,40 14,32 14,20" 
            fill="none" 
            stroke={color}
            strokeWidth="2"
          />
        </g>
        
        {/* Front crystal - society (lighter) */}
        <g opacity="0.8">
          <polygon 
            points="38,24 50,32 50,44 38,52 26,44 26,32" 
            fill="none" 
            stroke={color}
            strokeWidth="1.5"
          />
        </g>
        
        {/* Intersection highlight */}
        <polygon 
          points="26,32 38,32 38,40 26,40" 
          fill={color}
          opacity="0.1"
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>
      
      {showText && (
        <span 
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif',
            fontSize: size * 0.5,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: variant === 'dark' ? '#000' : '#fff'
          }}
        >
          cosilico
        </span>
      )}
    </div>
  );
};

export default Logo;