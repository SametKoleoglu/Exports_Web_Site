import React from "react";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import wave from "../../assets/wave.gif";

const ServiceData = [
  {
    title: "WEB",
    content: "5+",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure unde doloremque velit officiis natus eaque, magni mollitia repellat facilis hic nesciunt fuga atque, cumque perferendis. Quas sit non eius laudantium.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "WEB",
    content: "5+",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure unde doloremque velit officiis natus eaque, magni mollitia repellat facilis hic nesciunt fuga atque, cumque perferendis. Quas sit non eius laudantium.",
    icon: <FaHtml5 className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "WEB",
    content: "5+",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure unde doloremque velit officiis natus eaque, magni mollitia repellat facilis hic nesciunt fuga atque, cumque perferendis. Quas sit non eius laudantium.",
    icon: <FaJava className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "WEB",
    content: "5+",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure unde doloremque velit officiis natus eaque, magni mollitia repellat facilis hic nesciunt fuga atque, cumque perferendis. Quas sit non eius laudantium.",
    icon: <FaPython className="text-7xl" />,
    aosDelay: "300",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 relative z-10">
            {ServiceData.map((data, index) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="min-h-[200px] flex flex-col justify-centerv items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-1xl py-7 px-3 w-full lg:w-[250px] mx-auto">
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
