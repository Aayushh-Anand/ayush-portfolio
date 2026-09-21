import Navbar from "./sections/Navbar/Navbar";
import SocialBar from "./components/SocialBar";
import ResumeButton from "./components/ResumeButton";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader/Loader";

import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Loader />

      <div className="relative min-h-screen bg-[#08080d]">
        {/* Galaxy Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Background/background-final.webp')",
          }}
        />
        {/* Galaxy Dark Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[#08080d]/45"
        />

        <SmoothScroll>
          <Navbar />
          <CustomCursor />
          <SocialBar />
          <ResumeButton />

          <main>
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}

export default App;