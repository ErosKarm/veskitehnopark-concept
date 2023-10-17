import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-200 flex flex-col items-center justify-center p-2 h-[200px] ">
        <span className="uppercase text-blue-700 font-bold text-xs">
          Mobiil
        </span>
        <span>Laadi alla Veskitehnopargi mobiilirakendus</span>
        <div className="flex justify-center items-center">
          <Image
            src={"/play-store.png"}
            width={170}
            height={170}
            alt="Play store"
          />
          <Image
            src={"/apple-store.png"}
            width={150}
            height={150}
            alt="Play store"
          />
        </div>
      </div>
      <div className="flex flex-col items-center pt-4">
        <div className="mt-4">
          <ul className="flex text-xs gap-x-16  text-blue-800">
            <li>Tingimused</li>
            <li>Kontakt</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="mt-4">
          <ul className="flex text-xs gap-x-4  text-blue-800">
            <li>+372 5124 2344</li>
            <li>info@veskitehnopark.ee</li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <span className="text-xs text-muted-foreground">
            © 2023 Kookon. Kõik õigused reserveeritud.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
