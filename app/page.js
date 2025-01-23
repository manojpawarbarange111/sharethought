import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";

export default function Home() {
  return (
    <div className="bg-base-200">
   <Navbar/>
   <Hero></Hero>
   <Pricing> </Pricing>
    </div>
  );
}
