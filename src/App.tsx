import { lazy, Suspense, useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";

const Hero = lazy(() =>
  import("./components/Hero").then((m) => ({ default: m.Hero }))
);
const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About }))
);
const Education = lazy(() =>
  import("./components/Education").then((m) => ({ default: m.Education }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingScreen />}>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
