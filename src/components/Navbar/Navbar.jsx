import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div data-aos="fade-town" className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 text-white font-bold text-2xl ">
            <img src={Logo} alt="logo" className="w-10" />
            <span>Yazılım</span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-5 text-xl py-4 sm:py-0  ">
              <li>
                <a href="#">Hakkında</a>
              </li>
              <li>
                <a href="#">İnovasyon</a>
              </li>
              <li>
                <a href="#">Vizyonumuz</a>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="border-2 border-white px-3 py-1 rounded-md text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
