import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
