import TechStack from "@/components/sections/TechStack";
import About from "../components/sections/About";
import Home from "../components/sections/Home";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <TechStack/>
      <Projects/>
      {/* <Achievements/> */}
    </>
  );
}
