import {
  ArrowRight,
  BrainCircuit,
  CircuitBoard,
  Fingerprint,
  ParkingSquare,
  ShieldCheck,
  Smartphone,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";
import StatisticsAreasOfUse from "./statistics-areas-of-use";

const Statistics = () => {
  return (
    <section className="mt-12 flex flex-col">
      <span className="text-blue-700 uppercase text-xs text-center">
        Veski tehnopargi laod
      </span>
      <h1 className="text-3xl font-medium text-center">
        Kiire & lihtne üüriprotsess
      </h1>
      <div className="grid grid-cols-3 w-[1300px] mx-auto gap-x-24 mb-4 mt-12 gap-y-0">
        <div className="flex items-center gap-4 p-8">
          <div className="flex flex-col items-center">
            <Fingerprint className="w-8 h-8 mb-2" />
            <h3 className="text-md">Turvaline</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Kaasaegsed laopinnad ja tõhusad turvalahendused tagavad meie
            klientidele turvalise keskkonna.
          </p>
        </div>
        <div className="flex items-center gap-4 p-8">
          <div className="flex flex-col items-center">
            <BrainCircuit className="w-8 h-8 mb-2" />
            <h3 className="text-md">Mugav</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Meie kodulehelt saab alati live ülevaate vabadest ladudest, mis
            parasjagu valikus on.
          </p>
        </div>
        <div className="flex items-center  gap-4  p-8">
          <div className="flex flex-col items-center">
            <Warehouse className="w-8 h-8 mb-2" />
            <h3 className="text-md">Paindlik</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Meie nutilaos saab vabalt valida erinevate suurustega laopindade
            vahel lähtudes lao otstarbele.
          </p>
        </div>
        <div className="flex items-center gap-4  p-8">
          <div className="flex flex-col items-center">
            <ParkingSquare className="w-8 h-8 mb-2" />
            <h3 className="text-md">Parkimine</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Mugava ligipääsu tagamiseks oma laopinnale on meie üürnikele alati
            tasuta parkimine tagatud.
          </p>
        </div>

        <div className="flex items-center gap-4 p-8">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 mb-2" />
            <h3 className="text-md">Toetav</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Veski tehnopark hoolib oma klientidest ja nende käekäigust. Seetõttu
            pakume lisateenusena Veskitehnopargi Kaitset.
          </p>
        </div>

        <div className="flex items-center  gap-4 p-8">
          <div className="flex flex-col items-center">
            <CircuitBoard className="w-8 h-8 mb-2" />
            <h3 className="text-md">Uuenduslik</h3>
          </div>
          <p className="text-center text-xs text-slate-700">
            Meie prioriteediks on pakkuda oma klientidele lahendusi, mis
            lihtsustaks nende elu.
          </p>
        </div>
      </div>
      <StatisticsAreasOfUse />
    </section>
  );
};

export default Statistics;
