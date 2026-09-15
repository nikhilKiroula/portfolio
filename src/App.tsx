import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>
    </>
  );
}

export default App;