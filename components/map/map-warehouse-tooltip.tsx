import { Warehouse } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ArrowRight, Circle, Loader2 } from "lucide-react";
import { useState } from "react";

interface MapWarehouseTooltipProps {
  visible: boolean;
  top: number | undefined;
  left: number | undefined;
  warehouse: Warehouse | undefined;
  setVisible: (arg0: boolean) => void;
}

const MapWarehouseTooltip = ({
  visible,
  top,
  left,
  warehouse,
  setVisible,
}: MapWarehouseTooltipProps) => {
  const positioning = visible === true ? "absolute" : "hidden";
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <div
      style={{ top: `calc(${top}% - 245px)`, left: `calc(${left}% - 8px)` }}
      className={cn(
        "z-50 h-[240px]  w-[250px]  rounded bg-blue-700/40 text-white px-4 py-2 backdrop-blur",
        positioning
      )}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <div className="grid grid-cols-3 w-full mt-2 px-2">
        <div>
          <h1 className="text-4xl font-bold">
            {warehouse ? warehouse.warehouse : "X"}
          </h1>
          {warehouse?.availability === true ? (
            <div className="flex gap-x-2 items-center">
              <div className="h-2 w-2 animate-pulse bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-semibold">VABA</span>
            </div>
          ) : (
            <div className="flex gap-x-2 items-center">
              <div className="h-2 w-2 animate-pulse bg-red-500 rounded-full"></div>
              <span className="text-[10px] font-semibold">HÕIVATUD</span>
            </div>
          )}
        </div>
        <div className="col-span-2 flex items-center">
          <Image
            src="/logo.webp"
            alt="veski logo"
            width={150}
            height={150}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
      <Separator className="mt-2 mb-4" />

      <div className="grid  grid-cols-2 p-2">
        <div className="flex flex-col pb-2 ">
          <span className="text-xs font-semibold">Rendihind</span>
          <span className="text-xs">{warehouse?.price}/eur</span>
        </div>

        <div className="flex flex-col items-end pb-2 ">
          <span className="text-xs font-semibold">Ruutmeetrid</span>
          <span className="text-xs">{warehouse?.squaremeters} m2</span>
        </div>

        <div className="flex flex-col pb-2">
          <span className="text-xs font-semibold">Laotüüp</span>
          <span className="text-xs">{warehouse?.warehouseType}</span>
        </div>

        <div className="flex flex-col items-end pb-2 ">
          <span className="text-xs font-semibold">Saadavus</span>
          <span
            className={cn(
              "text-[10px] font-bold",
              warehouse?.availability === true
                ? "text-green-500"
                : "text-red-500"
            )}
          >
            {warehouse?.availability === true ? "VABA" : "HÕIVATUD"}
          </span>
        </div>
      </div>

      <Link
        onClick={() => setIsLoading(true)}
        href={`/ladu/${warehouse?.warehouse}`}
        className="flex gap-x-1 items-center text-xs bg-slate-900 p-[8px] rounded mt-auto justify-center align-center"
      >
        {isLoading ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          `Broneeri nutiladu`
        )}
      </Link>
    </div>
  );
};

export default MapWarehouseTooltip;
