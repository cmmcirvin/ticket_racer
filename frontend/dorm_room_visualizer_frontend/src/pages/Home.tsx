import { Outlet, redirect } from "react-router-dom";
import { useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

const Home = () => {
  
  return (
    <div className="relative w-full h-[100vh] min-h-fit overflow-hidden bg-gray-300 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gray-300 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
        <h1 className={cn("text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 z-20")}>
          Dorm Room Visualizer
        </h1>
        <Highlight className="text-gray-600 dark:text-white text-xl px-4 md:text-2xl lg:text-3xl font-bold">
          make any room your own
        </Highlight>
    </div>

  );
}
 
export default Home