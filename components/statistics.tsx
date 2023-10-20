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
      <div className="grid grid-cols-3 w-[1300px] mx-auto gap-x-24 mb-4 mt-12 gap-y-12">
        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <Fingerprint className="w-12 h-12" />
          <h3 className="text-xl">Turvaline</h3>
          <p className="text-center text-xs text-slate-700">
            Kaasaegsed laopinnad ja tõhusad turvalahendused tagavad meie
            klientidele turvalise keskkonna.
          </p>
        </div>
        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <BrainCircuit className="w-12 h-12" />
          <h3 className="text-xl">Mugav</h3>
          <p className="text-center text-xs text-slate-700">
            Meie kodulehelt saab alati live ülevaate vabadest ladudest, mis
            parasjagu valikus on.
          </p>
        </div>
        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <Warehouse className="w-12 h-12" />
          <h3 className="text-xl">Paindlik</h3>
          <p className="text-center text-xs text-slate-700">
            Meie nutilaos saab vabalt valida erinevate suurustega laopindade
            vahel lähtudes lao otstarbele.
          </p>
        </div>
        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <ParkingSquare className="w-12 h-12" />
          <h3 className="text-xl">Parkimine</h3>
          <p className="text-center text-xs text-slate-700">
            Mugava ligipääsu tagamiseks oma laopinnale on meie üürnikele alati
            tasuta parkimine tagatud.
          </p>
        </div>

        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <ShieldCheck className="w-12 h-12" />
          <h3 className="text-xl">Toetav</h3>
          <p className="text-center text-xs text-slate-700">
            Veski tehnopark hoolib oma klientidest ja nende käekäigust. Seetõttu
            pakume lisateenusena Veskitehnopargi Kaitset.
          </p>
        </div>

        <div className="flex items-center flex-col bg-slate-50 p-8 rounded">
          <CircuitBoard className="w-12 h-12" />
          <h3 className="text-xl">Uuenduslik</h3>
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
