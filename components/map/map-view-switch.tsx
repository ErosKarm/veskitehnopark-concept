import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface MapViewSwitchProps {
  setViewType: (value: "front" | "back") => void;
  viewType: "front" | "back";
}

const MapViewSwitch = ({ setViewType, viewType }: MapViewSwitchProps) => {
  return (
    <>
      {/* ARROW VIEW SWITCH */}

      {/* ARROW VIEW SWITCH */}
      <div
        className="absolute group top-[50px] flex items-center gap-x-2 left-[60px] rounded-full z-40 cursor-pointer select-none text-white font-semibold text-xs"
        onClick={() => {
          if (viewType === "front") {
            setViewType("back");
          } else {
            setViewType("front");
          }
        }}
      >
        <ArrowLeft className="w-9 h-9 bg-white p-2 rounded-full  text-blue-700 group-hover:text-white group-hover:bg-blue-700 transition-all" />
        KEERA HOONET
      </div>

      <div
        className="absolute top-[50px] flex items-center gap-x-2 right-[60px] rounded-full z-40 cursor-pointer select-none text-white font-semibold text-xs group"
        onClick={() => {
          if (viewType === "front") {
            setViewType("back");
          } else {
            setViewType("front");
          }
        }}
      >
        KEERA HOONET
        <ArrowRight className="w-9 h-9 bg-white p-2 rounded-full  text-blue-700 group-hover:text-white group-hover:bg-blue-700 transition-all" />
      </div>

      {/* ARROW MIDDLE SWITCH */}
      <div
        className={cn(
          "absolute top-3 rounded-md left-[calc(50%-150px)]  ml-auto bg-white w-[300px] px-3 pb-3 z-20 shadow-lg scale-75 hover:scale-95 transition-all"
        )}
      >
        <h2 className="text-sm uppercase my-2 text-black font-semibold text-center">
          Vaheta vaadet
        </h2>

        <div className="grid grid-cols-2 gap-x-4">
          <Image
            src="/veski-frontview.webp"
            alt="veski front"
            width={140}
            height={140}
            className={cn(
              "cursor-pointer",
              viewType === "front"
                ? "border-[4px] border-blue-700"
                : "border-[4px] border-white"
            )}
            onClick={() => setViewType("front")}
          />

          <Image
            src="/veski-backview.webp"
            alt="veski front"
            width={140}
            height={140}
            onClick={() => setViewType("back")}
            className={cn(
              "cursor-pointer",
              viewType === "back"
                ? "border-[4px] border-blue-700"
                : "border-[4px] border-white"
            )}
          />
        </div>
      </div>
    </>
  );
};

export default MapViewSwitch;
