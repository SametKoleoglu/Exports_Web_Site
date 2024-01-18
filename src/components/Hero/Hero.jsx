import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" h-full text-white relative z-50">
      <div className="flex h-full items-center justify-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-10 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Küresel Açık Yazılım
            </h1>
            <p data-aos="fade-up" data-aos-delay="300"  > 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              nobis odio ad tempora perferendis, placeat libero beatae aliquam
              itaque sunt repellendus nostrum fugit. Sequi maxime animi
              accusamus temporibus aliquam dolor?
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className="primary-button">Daha Fazlası</button>
          </div>
        </div>
      </div>
      {/* surgace section */}

      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black from-10% to-90% h-[20px] sm:h-[50px] md:[60px] "></div>
    </div>
  );
};

export default Hero;
