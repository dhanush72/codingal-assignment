import React, { useState, useEffect } from "react";
import CodingalLogo from "../assets/images/codingal.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `1${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const handleStop = () => {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
    setShowModal(false);
  };

  return (
    <nav className="fixed top-0 z-10 flex flex-wrap items-center justify-between w-full p-4 bg-white shadow">
      <div className="flex items-center flex-shrink-0 mr-6 ">
        <a
          className="inline text-gray-600 no-underline hover:no-underline"
          href="#"
        >
          <img
            src={CodingalLogo}
            alt="Codingal"
            className="w-12 md:w-12 lg:w-10"
          />
        </a>
        <span className="hidden pl-2 text-4xl text-gray-300 divide-x font-extralight lg:block">
          |
        </span>
        <span className="hidden pl-2 font-bold lg:block">
          Trial Lesson [Grade 1-3]{" "}
        </span>

        <span className="pl-2 text-2xl font-bold lg:hidden">Codingal</span>
      </div>

      <div
        className="block lg:hidden"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 text-2xl text-gray-500 outline-none"
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div
        className={
          navbarOpen
            ? "flex-grow w-full  pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0"
            : "hidden flex-grow w-full pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0"
        }
      >
        <ul className="flex items-center justify-between flex-1 lg:justify-end list-reset lg:flex">
          <li className="mr-3">
            <Link
              className="inline-block px-4 py-2 font-bold text-gray-600 no-underline hover:text-underline "
              to="/posts"
            >
              Posts
            </Link>
          </li>
          <li className="mr-3">
            <a
              className="inline-block px-4 py-2 font-bold text-gray-600 no-underline hover:text-underline"
              href="#"
            >
              {minute}:{second}
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block px-4 py-2 text-white no-underline bg-red-500 rounded hover:text-underline"
              href="#"
              onClick={() => setShowModal(true)}
            >
              End class
            </a>
          </li>
        </ul>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleStop={handleStop}
      />
    </nav>
  );
};

export default Navbar;
