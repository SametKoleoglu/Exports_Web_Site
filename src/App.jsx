import React from "react";
import bgVideo from "./assets/earth-bg.mp4";

import AOS from "aos";
import "aos/dist/aos.css";

{/*Components*/}

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Banner2 from "./components/Banner/Banner2";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <div className="h-[700px] relative">
        <video
          className="fixed right-0 top-0 h-[700px] w-full  object-cover z-[-1]]"
          autoPlay
          loop
          muted
          src={bgVideo}
        ></video>
        <Navbar />
        <Hero />
      </div>

      {/* Services and Section */}

      <Services />
      <Banner />
      <Banner2/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default App;
