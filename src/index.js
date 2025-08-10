import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Music from "./pages/Music";
import Credits from "./pages/Credits";
import Contact from "./pages/Contact";
import Shpilke from "./pages/Shpilke";
import ZoomRedirect from "./pages/ZoomRedirect";
import DiscordRedirect from "./pages/DiscordRedirect";
import PTPS from "./pages/PTPS";
import ScrollIntoView from "./components/ScrollToTop";
import { config } from "react-spring";
import Stalling from "./pages/Stalling";
import DreamFactory from "./pages/Dream Factory";
import BeachTrip from "./pages/BeachTrip";
import SpellToBreak from "./pages/SpellToBreak";
import Tekha from "./pages/Tekha";
import ROTS from "./pages/ROTS";
import Sprout from "./pages/Sprout";
import Alistair from "./pages/Alistair";
import Afterlife from "./pages/Afterlife";
import BroadwayBlues from "./pages/BroadwayBlues";
import ClawsAndOrder from "./pages/CAO";
import Shuriken from "./pages/Shuriken";
import MixedJams from "./pages/MixedJams";
import Puddle from "./pages/Puddle";
import Survivors from "./pages/Survivors";
import Upstream from "./pages/Upstream";
import Unicorn from "./pages/Unicorn";

const root = ReactDOM.createRoot(document.getElementById("root"));
const state = {
  goToSlide: 0,
  offsetRadius: 2,
  showNavigation: true,
  config: config.gentle,
};
root.render(
  <BrowserRouter>
    <ScrollIntoView>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music/shpilkes" element={<Shpilke />} />
        <Route path="/zoom" element={<ZoomRedirect />} />
        <Route path="/discord" element={<DiscordRedirect />} />
        <Route path="/music/potion-pushas" element={<PTPS />} />
        <Route path="/music/stalling" element={<Stalling />} />
        <Route path="/music/the-dream-factory" element={<DreamFactory />} />
        <Route path="/music/beach-trip" element={<BeachTrip />} />
        <Route path="/music/a-spell-to-break" element={<SpellToBreak />} />
        <Route path="/music/across-the-astral-sea-tekha" element={<Tekha />} />
        <Route path="/music/resurgence-of-the-storm" element={<ROTS />} />
        <Route path="/music/sprout" element={<Sprout />} />
        <Route path="/music/alistair" element={<Alistair />} />
        <Route path="/music/afterlife" element={<Afterlife />} />
        <Route path="/music/broadway-blues" element={<BroadwayBlues />} />
        <Route path="/music/claws-and-order" element={<ClawsAndOrder />} />
        <Route path="/music/shuriken-saga" element={<Shuriken />} />
        <Route path="/music/mixed-jams" element={<MixedJams />} />
        <Route path="/music/puddle" element={<Puddle />} />
        <Route path="/music/survivors" element={<Survivors />} />
        <Route path="/music/upstream" element={<Upstream />} />
        <Route path="/music/unicorn" element={<Unicorn />} />

      </Routes>
    </ScrollIntoView>
  </BrowserRouter>,
);
