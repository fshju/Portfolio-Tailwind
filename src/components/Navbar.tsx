"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 py-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Shahrukh Portfolio</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row gap-6">
            <li>
              <Link href="/">
                <button onClick={() => "/"} className="hover:text-blue-400">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <button
                  onClick={() => "/projects"}
                  className="hover:text-blue-400"
                >
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button
                  onClick={() => "/contact"}
                  className="hover:text-blue-400"
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
