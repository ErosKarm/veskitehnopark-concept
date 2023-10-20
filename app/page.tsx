import Hero from "@/components/hero";

import MapContainer from "@/components/map/map-container";
import Statistics from "@/components/statistics";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="text-center font-semibold mb-3">
          Vali endale sobiv nutiladu
        </div>
        <MapContainer />
        <Statistics />
      </main>
    </>
  );
}
