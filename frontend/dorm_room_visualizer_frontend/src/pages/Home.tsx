import { Outlet, redirect } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  
  return (
    <div className="min-h-[53rem] w-full dark:bg-slate-950 bg-white  dark:bg-grid-slate-500/[0.2] bg-grid-black/[0.2]">
      HIIII
      <Outlet />
    </div>

  );
}
 
export default Home