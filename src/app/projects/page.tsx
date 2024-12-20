import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16" id="projects">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 1</h3>
            <a
              href="https://milestones5-dusky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-2 text-gray-300">Resume builder.</p>
              <Image
                src="/projectpic1.jpg"
                alt="img1"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 2</h3>
            <a
              href="https://milestone1-phi-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-2 text-gray-300">Resume</p>
              <Image
                src="/projectpic2.jpg"
                alt="img2"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 3</h3>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p className="mt-2 text-gray-300">Portfolio</p>
              <Image
                src="/projectpic3.jpg"
                alt="img3"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
