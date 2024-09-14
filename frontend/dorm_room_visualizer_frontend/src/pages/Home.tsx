import { Outlet, redirect } from "react-router-dom";
import { useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

const Home = () => {
  
  return (
    <div className="relative w-full h-[100vh] min-h-fit overflow-hidden bg-gray-300 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gray-300 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>

  );
}
 
export default Home