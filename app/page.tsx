import Hero from "@/components/hero";
import MainNavigation from "@/components/main-navigation";
import MapContainer from "@/components/map/map-container";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MapContainer />

        <section>
          <div>
            <span>30</span>
          </div>
        </section>
      </main>
    </>
  );
}
