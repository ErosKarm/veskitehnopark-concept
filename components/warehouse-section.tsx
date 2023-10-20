"use client";

import { Warehouse } from "@/lib/types";
import { Lock, ShowerHead } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { WarehouseSwitchInput } from "./warehouse-switch-input";
import WarehouseSectionInfoContainer from "./warehouse-section-info-container";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Toggle } from "./ui/toggle";

interface WarehouseSectionProps {
  selectedWarehouse: Warehouse[];
}

const WarehouseSection = ({ selectedWarehouse }: WarehouseSectionProps) => {
  const [isWC, setIsWC] = useState(false);
  const [isBoiler10, setIsBoiler10] = useState(false);
  const [isBoiler50, setIsBoiler50] = useState(false);
  const [isShower, setIsShower] = useState(false);

  const calculatePrice = () => {
    const base = selectedWarehouse[0].price;

    if (isWC === true && isBoiler10 === false && isBoiler50 === false) {
      return base + 100;
    }

    if (isBoiler10) {
      return base + 100 + 10;
    }

    if (isBoiler50 && isShower === false) {
      return base + 100 + 20;
    }

    if (isShower) {
      return base + 100 + 20 + 25;
    }

    return base;
  };

  return (
    <>
      <div className="grid grid-cols-10 gap-x-10 w-[1200px] mx-auto pt-10 ">
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
          <div className="absolute h-[80px] flex items-center justify-center w-[70px] top-[25%] right-[210px] text-7xl font-bold skew-y-[30deg] skew-x-[-0deg]">
            {selectedWarehouse[0].warehouse}
          </div>
        </div>
        <div className="flex  flex-col col-span-2 z-20">
          <WarehouseSwitchInput selectedWarehouse={selectedWarehouse} />

          <span className="mt-6 flex mb-2 text-xs">Vali lisavarustus:</span>
          <div className="flex  gap-x-2">
            <Button
              disabled={isShower}
              size={"icon"}
              onClick={() => {
                setIsWC(!isWC);
                calculatePrice();
              }}
              className={cn(
                "text-[9px] bg-blue-900/30  text-white hover:bg-white/70 hover:text-black",
                isWC && "bg-white text-black hover:bg-white"
              )}
            >
              WC
            </Button>

            <Button
              size={"icon"}
              disabled={isShower}
              onClick={() => {
                if (isBoiler50) setIsBoiler50(false);
                setIsBoiler10(!isBoiler10);
                setIsWC(true);
                calculatePrice();
              }}
              className={cn(
                "text-[9px] bg-blue-900/30  text-white hover:bg-white/70 hover:text-black relative",
                isBoiler10 && "bg-white text-black hover:bg-white"
              )}
            >
              Boiler <br /> 10L
              {isShower && (
                <Lock className="absolute w-3 h-3  top-[-3px] right-0 bg-black p-[2px] text-white" />
              )}
            </Button>

            <Button
              size={"icon"}
              disabled={isShower}
              onClick={() => {
                if (isBoiler10) setIsBoiler10(false);
                setIsBoiler50(!isBoiler50);
                setIsWC(true);
                calculatePrice();
              }}
              className={cn(
                "text-[9px] bg-blue-900/30  text-white hover:bg-white/70 hover:text-black",
                isBoiler50 && "bg-white text-black hover:bg-white"
              )}
            >
              Boiler <br /> 50L
            </Button>

            <Button
              size={"icon"}
              onClick={() => {
                setIsShower(!isShower);
                setIsBoiler50(true);
                setIsWC(true);
                setIsBoiler10(false);
                calculatePrice();
              }}
              className={cn(
                "text-[9px] bg-blue-900/30  text-white relative hover:bg-white/70 hover:text-black",
                isShower && "bg-white text-black hover:bg-white"
              )}
            >
              <ShowerHead className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col  items-center bg-blue-900/30 mt-8 pt-4 rounded">
            <span className="text-sm">Kuumakse:</span>
            <span className="text-2xl font-semibold">{calculatePrice()}€</span>
            <span className="text-xs text-muted-foreground">(lisandub KM)</span>

            <Button className="w-full text-[10px] uppercase  bg-white text-black rounded-none mt-4 hover:bg-white/70">
              Allkirjasta rendileping
            </Button>
          </div>
          <div className="flex flex-col items-end justify-center align-end mt-auto">
            <Image
              src={"/logo.webp"}
              alt="logo"
              width={200}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
        <Separator className="col-span-10 mt-8 bg-white/20 w-[75%] mx-auto" />
        <div className="col-span-10  w-[75%] mt-8 mx-auto z-20 pb-8">
          <h3 className="text-xs font-semibold">Tehnilised näitajad</h3>
          <div className="grid grid-cols-2">
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
              <li>
                Radiaatorküte, valmidus juurde paigaldada õhksoojuspumpasid
              </li>
              <li>Kvaliteetsetest sandwich paneelidest sise- ja välisseinad</li>
              <li>Tehniline valvesignalisatsioon</li>
              <li>Tulekahjusignalisatioonisüsteem</li>
              <li>Kaugloetavad elektri- ja veearvestid</li>
              <li>Tasuta internet (Ethernet pistik)</li>
              <li>Personaalne tegevuslogi Kookoni mobiilirakenduses</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarehouseSection;
