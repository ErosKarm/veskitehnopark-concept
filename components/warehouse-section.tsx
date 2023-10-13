"use client";

import { Warehouse } from "@/lib/types";
import { ArrowLeft, ShowerHead } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import { WarehouseSwitchInput } from "./warehouse-switch-input";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import WarehouseSectionInfoContainer from "./warehouse-section-info-container";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";

const warehouses = [
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "B",
    label: "Ladu B",
  },
  {
    value: "C",
    label: "Ladu C",
  },
  {
    value: "D",
    label: "Ladu D",
  },
  {
    value: "E",
    label: "Ladu E",
  },
  {
    value: "F",
    label: "Ladu F",
  },
  {
    value: "G",
    label: "Ladu G",
  },
  {
    value: "H",
    label: "Ladu H",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "A",
    label: "Ladu A",
  },
];

interface WarehouseSectionProps {
  selectedWarehouse: Warehouse[];
}

const WarehouseSection = ({ selectedWarehouse }: WarehouseSectionProps) => {
  return (
    <div className="grid grid-cols-10 gap-x-10 w-[1300px] mx-auto pt-12 ">
      <WarehouseSectionInfoContainer selectedWarehouse={selectedWarehouse} />

      <div className="col-span-6 h-full w-[100%] mx-auto flex justify-center align-center relative">
        <div className="flex justify-center gap-x-4 mt-2 mx-4 w-[70%]">
          <div className="absolute  top-[17%] right-[200px]  z-20 skew-y-[28deg]">
            {selectedWarehouse[0].availability === true ? (
              <Badge
                className={cn(
                  "text-[8px] font-semibold text-white ",
                  selectedWarehouse[0].availability === true
                    ? "bg-emerald-500"
                    : ""
                )}
              >
                SAADAVAL
              </Badge>
            ) : (
              <Badge
                className={cn(
                  "text-[8px] font-semibold text-white ",
                  selectedWarehouse[0].availability === false
                    ? "bg-red-500"
                    : ""
                )}
              >
                HÕIVATUD
              </Badge>
            )}
          </div>
        </div>
        <Image
          src={"/warehouse-lorem.webp"}
          fill
          quality={100}
          alt="Veskitehnopark warehouse image"
          className="object-contain scale-100"
        />
        <div className="absolute  h-[80px] flex items-center justify-center w-[70px] top-[25%] right-[210px] text-7xl font-bold skew-y-[28deg]">
          {selectedWarehouse[0].warehouse}
        </div>
      </div>
      <div className="col-span-2">
        <WarehouseSwitchInput selectedWarehouse={selectedWarehouse} />

        <span className="mt-6 flex mb-2 text-xs">Vali lisavarustus:</span>
        <div className="flex  gap-x-2">
          <Button size={"icon"} className="text-[9px]">
            WC
          </Button>
          <Button size={"icon"} className="text-[9px]">
            Boiler <br /> 50L
          </Button>
          <Button size={"icon"} className="text-[9px]">
            Boiler <br /> 10L
          </Button>
          <Button size={"icon"}>
            <ShowerHead className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-col  items-center bg-blue-800 mt-8 pt-4 rounded">
          <span className="text-sm">Kuumakse:</span>
          <span className="text-2xl font-semibold">
            {selectedWarehouse[0].price}€
          </span>
          <span className="text-xs text-muted-foreground">(lisandub KM)</span>

          <Button className="w-full text-[10px] uppercase  bg-white text-black rounded-none mt-4">
            Allkirjasta rendileping
          </Button>
        </div>
      </div>
      <Separator className="col-span-10 mt-8 bg-white/20 w-[75%] mx-auto" />
      <div className="col-span-10  w-[65%] mt-8 mx-auto">
        <h3 className="text-xs font-semibold">Tehnilised näitajad</h3>
        <div className="grid grid-cols-3">
          <ul className="text-xs list-disc flex flex-col gap-1 mt-4 text-white/70">
            <li>Laoruumi haldamine läbi Veskitehnopargi mobiilirakenduse</li>
            <li>Personaalne ukseesine videovalvekaamera</li>
            <li>Kaasaegne ning energiasäästlik LED valgustu</li>
            <li>Betoonpõrand, kandevõimega 3500kg/m2</li>
            <li>Automaatikaga tõstuks (3,0×3,6m)</li>
            <li>Elektriühendused 220V/360V, 20A</li>
            <li>Vee- ja kanalisatsiooni valmidused</li>
          </ul>
          <ul className="text-xs list-disc flex flex-col gap-1 mt-4 text-white/70">
            <li>Ventilatsioon (sundväljatõmme)</li>
            <li>Radiaatorküte, valmidus juurde paigaldada õhksoojuspumpasid</li>
            <li>Kvaliteetsetest sandwich paneelidest sise- ja välisseinad</li>
            <li>Tehniline valvesignalisatsioon</li>
            <li>Tulekahjusignalisatioonisüsteem</li>
            <li>Kaugloetavad elektri- ja veearvestid</li>
            <li>Tasuta internet (Ethernet pistik)</li>
            <li>Personaalne tegevuslogi Kookoni mobiilirakenduses</li>
          </ul>
          <div className="flex flex-col items-end justify-center align-end">
            <Image
              src={"/logo.webp"}
              alt="logo"
              width={200}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseSection;
