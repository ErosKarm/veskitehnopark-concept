import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";

const StatisticsAreasOfUse = () => {
  return (
    <div className="flex flex-col mt-16 transition-all">
      <span className="text-blue-700 uppercase text-xs text-center">
        Kasutusvaldkonnad
      </span>
      <h2 className="text-3xl text-center">Pind vastavalt vajadusele</h2>

      <div className="grid grid-cols-3 mt-8  transition-all">
        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/small-business.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />
          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Väikeettevõttele
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto flex group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Veskitehnopark on mõnus stardipaik nii alustavale ettevõttele kui
              ka stabiilne tegevuspaik juba väljakujunenud firmadele. Kenad
              puhtad ruumid jätavad klientidele hea mulje ning loovad
              töötamiseks motiveeriva ja väärika keskkonna. Lisaks ladustamisele
              või väiketööstusele saab pinnale hõlpsasti rajada kontori ja
              nõupidamisnurga.
            </p>
          </div>
        </div>

        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/boat-storage.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />

          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Veesõidukite talvekorteriks
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] flex items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Talveperioodil pole paremat kohta oma paadi hoidmiseks kui
              Veskitehnopark. Siin on seda turvaline hoiustada, mugav pesta ning
              hooldada. Hooldusmeestele saad tagada oma Veskitehnopargile
              ligipääsu nutiseadme kaudu.
            </p>
          </div>
        </div>

        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/caravan.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />
          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Haagiste hoidmiseks
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] flex items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Eesti kliima on seisvate haagiste või muu tööstus- ja hobitehnika
              vastu üsnagi vaenulik. Veskitehnopark on parim koht tehnika
              kaitsmiseks niiskuse, UV-kiirguse ja kõikuvate temperatuuride
              eest. Veskitehnopark kaitseb tehnikat ka pahatahtliku huvi eest.
              Samuti sobib pind hooldustööde teostamiseks.
            </p>
          </div>
        </div>

        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/motorbike.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />
          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Motorspordiga tegelemiseks
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] flex items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Kui Sinu hobiks on auto- või veesport, siis on Veskitehnopark
              ideaalne hoiupaik oma tehnikavarustuse paigutamiseks või ka
              hooldustööde teostamiseks.
            </p>
          </div>
        </div>

        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/small-warehouse.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />
          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Panipaigaks
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] flex items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Veskitehnopark on hea koht, kus ladustada oma seisvat vara või
              kaupa. Olgu selleks siis talveperioodiks turvalisemat paika vajav
              suvilamööbel ja aiatehnika või kolimise käigus hoiustamist vajav
              igapäevane kodune vara.
            </p>
          </div>
        </div>

        <div className="relative h-[350px] px-12 pb-0 flex flex-col overflow-hidden group">
          <Image
            src={"/weightlifting.jpg"}
            fill
            alt="fae"
            className="object-cover absolute -z-10"
          />
          <h3 className="text-sm font-bold uppercase text-white mt-6  tracking-wider">
            Erinevate hobidega tegelemiseks
          </h3>
          <Link href={"/"} className="text-xs text-white flex">
            Vaata nutiladusi <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
          <Separator className="bg-white/30 mt-3" />
          <div className="bg-blue-700/40 backdrop-blur h-[90px] mb flex items-center px-4 rounded pt-3 pb-3 w-full relative text-xs mt-auto group-hover:scale-100 translate-y-28 group-hover:translate-y-[-10px] transition-all">
            <p className=" text-white hover:text-md transition-all ">
              Lauatennis, jooga, jõusaal või ükskõik milline muu hobi mahub
              Veskitehnopargisse ilusasti ära. Kujundades ruumi vastavalt oma
              soovidele, võid siia mahutada nii lauatenniseklubi kui ka
              täistuuridel töötava keraamikastuudio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAreasOfUse;
