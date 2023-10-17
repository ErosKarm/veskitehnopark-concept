"use client";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, CornerUpRight, MoveRight } from "lucide-react";

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
      isActive: pathname === "/",
      href: `/galerii`,
    },
    {
      label: "Kontakt",
      isActive: pathname === "/",
      href: `/kontakt`,
    },
  ];

  return (
    <nav className="h-[55px]  flex items-center">
      <div className="w-full ml-24 flex justify-between items-center mx-auto h-full">
        <Image
          src={"/logo.webp"}
          width={200}
          height={200}
          alt="test"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="flex align-center justify-center h-full">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="w-[200px] text-xs h-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href={"/nutiladu"}
            className="text-sm w-[240px] h-full flex items-center justify-center border-l border-b  bg-blue-700 text-white"
          >
            Vali nutiladu
            <MoveRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
