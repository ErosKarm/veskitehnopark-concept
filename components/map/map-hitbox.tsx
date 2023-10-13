import { cn } from "@/lib/utils";

interface MapHitboxProps {
  left: number;
  top: number;
  available?: boolean;
}

const MapHitbox = ({ left, top, available }: MapHitboxProps) => {
  return (
    <div className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
      <div className="w-2 h-2 relative">
        <div
          className={cn(
            "h-full w-full bg-red-600 rounded-full animate-ping absolute",
            available === true ? "bg-green-600" : "bg-red-600"
          )}
        ></div>
        <div
          className={cn(
            "w-2 h-2 bg-red-600 rounded-full",
            available === true ? "bg-green-600" : "bg-red-600"
          )}
        ></div>
      </div>
    </div>
  );
};

export default MapHitbox;
