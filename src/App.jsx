import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

function App() {
  return (
    <>
      <div className="relative  overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-230 selection:text-cyan-900 ">
        <div className="  relative h-full w-full bg-neutral-950 -z-100">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] "></div>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Achievements />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
