import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Steps } from "./components/sections/Steps";
import { GreenCallout } from "./components/sections/GreenCallout";
import { Backoffice } from "./components/sections/Backoffice";
import { Pricing } from "./components/sections/Pricing";
import { Catalog } from "./components/sections/Catalog";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/layout/Footer";

const App = () => (
  <div className="min-h-screen bg-white">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-green-700 focus:font-semibold"
    >
      Aller au contenu principal
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <Features />
      <Steps />
      <GreenCallout />
      <Backoffice />
      <Pricing />
      <Catalog />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default App;
