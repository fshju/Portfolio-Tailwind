import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        className="flex flex-col justify-center items-center h-screen px-6"
        id="home"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image
            src="/shah pic.jpeg"
            alt="Shahrukh Ishtiaq"
            width={500}
            height={500}
            priority
          />
        </div>
        <h2 className="text-3xl md:text-5xl mt-6 font-bold">
          Shahrukh Ishtiaq
        </h2>
        <p className="text-xl text-blue-300 mt-2">Software Engineer</p>
      </section>
    </div>
  );
};

export default Home;
