const sinaLuIcon = "https://via.placeholder.com/100x100?text=Icon";

interface SinaLuIconProps {
  className?: string;
}

export function SinaLuIcon({ className = "" }: SinaLuIconProps) {
  return (
    <img 
      src={sinaLuIcon} 
      alt="SinaLu"
      className={className}
    />
  );
}
