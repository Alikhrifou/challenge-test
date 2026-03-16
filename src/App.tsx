import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Steps } from "./components/sections/Steps";
import { Pricing } from "./components/sections/Pricing";

import { Features } from "./components/sections/Features";
import { GreenCallout } from "./components/sections/GreenCallout";
import { Backoffice } from "./components/sections/Backoffice";
import { Catalog } from "./components/sections/Catalog";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
     <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <GreenCallout />
      <Backoffice />
      <Pricing />
      <Catalog />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
