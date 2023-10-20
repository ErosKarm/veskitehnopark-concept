import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Warehouse } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WarehouseSectionInfoContainerProps {
  selectedWarehouse: Warehouse[];
}

const WarehouseSectionInfoContainer = ({
  selectedWarehouse,
}: WarehouseSectionInfoContainerProps) => {
  return (
    <div className="col-span-2">
      <Link
        href={"/"}
        className="flex items-center gap-x-2 text-xs hover:underline uppercase tracking-wide mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Mine tagasi
      </Link>

      <div className="bg-blue-900/30 flex flex-col py-2 px-4 w-[70%] rounded">
        <span className="text-xs">Lao tähis</span>
        <span className="text-xl font-semibold">
          {selectedWarehouse[0].warehouse}
        </span>
      </div>
      <div className="flex items-center gap-x-4 mt-2 mx-4 w-[70%]">
        <span className="text-xs">Saadavus:</span>
        <div
          className={cn(
            "h-3 w-3  rounded-full",
            selectedWarehouse[0].availability === true
              ? "bg-emerald-500"
              : "bg-red-500"
          )}
        ></div>
      </div>
      <Separator className="bg-white/30 mt-4 mb-4" />

      <div>
        <h3 className="text-sm">Laopinna andmed</h3>
        <ul className="text-[11px] text-white/80 mt-2 flex flex-col gap-2 tracking-wide">
          <li>Laotüüp: {selectedWarehouse[0].warehouseType}</li>
          <li>Laius: {selectedWarehouse[0].warehouseWidth}m</li>
          <li>Pikkus: {selectedWarehouse[0].warehouseHeight}m</li>
          <li>Kõrgus: {selectedWarehouse[0].warehouseLength}m</li>
          <li>Pindala: {selectedWarehouse[0].squaremeters}m²</li>
          <li>Kubatuur: {selectedWarehouse[0].warehouseCapacity}m³</li>
          <li>Aadress: Kiili alev, Veski tn 5</li>
        </ul>
      </div>
      <Separator className="bg-white/30 mt-4 mb-8" />
      <div className="bg-blue-900/30 flex flex-col  w-full rounded">
        <span className="text-[10px] text-black font-semibold translate-y-[-7px] text-center uppercase bg-white rounded mr-[20%]">
          Veskitehnopargi nutiladu
        </span>
        <span className="text-[10px] px-4 pb-4">
          Meie kaasaegsed ja keskkonnasõbralikud nutilaod asuvad kiiresti
          arenevas Veski Tehnopargis, mis pakub suurepärast ligipääsu
          strateegilistele liiklussõlmedele Harjumaal.
        </span>
      </div>
    </div>
  );
};

export default WarehouseSectionInfoContainer;
