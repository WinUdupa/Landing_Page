import ScrollSection from "./components/ScrollSection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <ScrollSection />
      <FeatureSection />
      <Navbar />

    </>
  );
}