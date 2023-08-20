import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaList,
  FaCalendarCheck,
  FaBell,
} from "react-icons/fa";
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {MdNextPlan} from 'react-icons/md'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
      <nav className="flex items-center justify-between gap-12 h-[15%] relative">
        <a href="/" className="block font-semibold text-3xl py-1">
          snap
        </a>
        <ul className="md:flex gap-6 mr-auto hidden text-lg ">
          <li className="py-2 relative flex items-center gap-2 group cursor-pointer">
            Features{" "}
            <span className="inline-block text-xl group-hover:hidden">
              <BiChevronDown />
            </span>
            <span className="hidden text-xl group-hover:inline-block ">
              <BiChevronUp />
            </span>
            <ul className="group-hover:flex absolute top-10 hidden flex-col gap-3 shadow-md rounded-md  shadow-gray bg-white py-4 px-10 whitespace-nowrap">
              <li className="flex gap-3 items-center justify-start">
                <span className="text-xl text-blue-400">
                  <FaList />
                </span>
                To Do List
              </li>
              <li className="flex gap-3 items-center justify-start">
                <span className="text-xl text-cyan-400">
                  <FaCalendarCheck />
                </span>
                Calendar
              </li>
              <li className="flex gap-3 items-center justify-start">
                {" "}
                <span className="text-xl text-yellow-400">
                  <FaBell />
                </span>
                Reminders
              </li>
              <li className="flex gap-3 items-center justify-start">
                {" "}
                <span className="text-2xl text-purple-600">
                  <MdNextPlan />
                </span>
                Planning
              </li>
            </ul>
          </li>

          <li className="py-2 relative flex items-center gap-2 group cursor-pointer">
            Company{" "}
            <span className="inline-block text-xl group-hover:hidden">
              <BiChevronDown />
            </span>
            <span className="hidden text-xl group-hover:inline-block ">
              <BiChevronUp />
            </span>
            <ul className="group-hover:flex absolute top-10 hidden flex-col gap-3 shadow-md rounded-md  shadow-gray bg-white py-4 px-10 whitespace-nowrap">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li className="py-2 cursor-pointer mx-2">Careers</li>
          <li className="py-2 cursor-pointer ">About</li>
        </ul>
        {/* show menu mobile*/}

        {openMenu && (
          <ul className=" h-screen absolute top-0 right-0 w-[70%] flex flex-col items-start justify-center bg-white px-12 gap-12 ">
            <li className="py-2 relative flex items-center gap-2 group cursor-pointer">
              Features{" "}
              <span className="inline-block text-xl group-hover:hidden">
                <BiChevronDown />
              </span>
              <span className="hidden text-xl group-hover:inline-block ">
                <BiChevronUp />
              </span>
              <ul className="z-10 group-hover:flex absolute top-10 hidden flex-col gap-3 shadow-md rounded-md  shadow-gray bg-white py-4 px-10 whitespace-nowrap">
                <li className="flex gap-3 items-center justify-start">
                  <span className="text-xl text-blue-400">
                    <FaList />
                  </span>
                  To Do List
                </li>
                <li className="flex gap-3 items-center justify-start">
                  <span className="text-xl text-cyan-400">
                    <FaCalendarCheck />
                  </span>
                  Calendar
                </li>
                <li className="flex gap-3 items-center justify-start">
                  {" "}
                  <span className="text-xl text-yellow-400">
                    <FaBell />
                  </span>
                  Reminders
                </li>
                <li className="flex gap-3 items-center justify-start">
                  {" "}
                  <span className="text-2xl text-purple-600">
                    <MdNextPlan />
                  </span>
                  Planning
                </li>
              </ul>
            </li>

            <li className="py-2 relative flex items-center gap-2 group cursor-pointer">
              Company{" "}
              <span className="inline-block text-xl group-hover:hidden">
                <BiChevronDown />
              </span>
              <span className="hidden text-xl group-hover:inline-block ">
                <BiChevronUp />
              </span>
              <ul className="group-hover:flex absolute top-10 hidden flex-col gap-3 shadow-md rounded-md  shadow-gray bg-white py-4 px-10 whitespace-nowrap">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li className="py-2 cursor-pointer md:mx-2">Careers</li>
            <li className="py-2 cursor-pointer ">About</li>
          </ul>
        )}

        <ul className="md:flex gap-4 hidden">
          <li className="px-4 py-2">
            <a href="#login">Login</a>
          </li>
          <li className="px-4 py-2 rounded-xl border-2 hover:text-white hover:bg-black cursor-pointer">
            <a href="#register">Register</a>
          </li>
        </ul>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden block text-3xl z-10"
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    );
}
 
export default Nav;