"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Container from "./container";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Image from "next/image";
import { Button } from "./ui/button";
import { CornerRightDown } from "lucide-react";

const Hero = () => {
  return (
    <Container className="flex flex-col w-[1700px] bg-hero-image h-[800px] relative">
      <div className="flex flex-col mt-10 gap-6">
        <h1 className="text-9xl font-[600] ml-[200px]">Mugavad ja</h1>
        <h1 className="text-9xl font-[600] ml-[500px]">Kaasaegsed</h1>
        <h1 className="text-9xl font-[600] ml-[800px] underline text-blue-800">
          Nutilaod
        </h1>

        <span className="ml-[800px] w-[600px] font-semibold">
          Oled just parasjagu kolimas, sul on garaažist ruumi puudu või seisab
          ehitusmaterjal ees ja seda oleks vaja ladustada kuskil kindlas kohas,
          siis selleks sobivad väga hästi meie nutilaod.
        </span>
      </div>

      <div className="absolute bottom-[140px]">
        <span className="flex font-semibold text-emerald-600 text-center ml-[250px] w-[200px]">
          Hoone on Valmis. <br /> Tee eelbroneering juba täna!
        </span>
      </div>

      <Button className="h-[200px] w-[200px] rounded-full bg-blue-700 font-semibold text-xl ml-[250px] absolute bottom-[250px]">
        <CornerRightDown className="w-16 h-16" />
      </Button>
    </Container>
  );
};

export default Hero;
