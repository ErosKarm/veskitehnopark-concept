"use client";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, CornerUpRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      label: "Avaleht",
      isActive: pathname === "/",
      href: `/`,
    },
    {
      label: "Galerii",
      isActive: pathname === "/galerii",
      href: `/galerii`,
    },
    {
      label: "Kontakt",
      isActive: pathname === "/kontakt",
      href: `/kontakt`,
    },

    {
      label: "Vali nutiladu",
      isActive: pathname.includes("ladu"),
      href: `/ladu/A`,
    },
  ];

  return (
    <>
      <div className="flex justify-between text-xs w-[1300px] mx-auto mt-2 mb-2">
        <div>info@veskitehnopark.ee</div>
        <div className="flex gap-x-4 text-[9px]  text-black tracking-wide">
          <span>Facebook</span>
          <span>Kontakt</span>
          <span>Tingimused</span>
          <span>+372 5124 2344</span>
        </div>
      </div>
      <nav className="h-[55px] -mb-[55px] z-[100] relative flex items-center w-[1500px] mx-auto">
        <div className="w-full ml-24 flex justify-between items-center mx-auto h-full">
          <Image
            src={"/logo.webp"}
            width={150}
            height={150}
            alt="test"
            className={cn(
              "cursor-pointer align-start",
              pathname.includes("ladu") && "brightness-0 invert"
            )}
            onClick={() => router.push("/")}
          />

          <div
            className={cn(
              "flex align-center justify-center h-full",
              pathname.includes("ladu") ? "text-white" : ""
            )}
          >
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "w-[100px] text-xs h-full flex items-center justify-center   transition-all",
                  route.isActive && "underline"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
