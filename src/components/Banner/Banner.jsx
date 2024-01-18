import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src={sateliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="px-3 p-4 border-r-2 xl:pr-36 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-500 uppercase">
              Misyonumuz
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Hızlı Başlangıç
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptatum autem voluptatem quas ipsum, unde, corrupti saepe
              minima maxime nulla ab? Molestias laudantium est dicta ipsum,
              tempore hic! Aspernatur, doloremque!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Daha Fazla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
