import Hero from "@/components/hero";

import MapContainer from "@/components/map/map-container";
import Statistics from "@/components/statistics";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MapContainer />
        <Statistics />
      </main>
    </>
  );
}
