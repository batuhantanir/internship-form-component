import React from "react";

import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";

function UsersListNav() {
  return (
    <div className="">
      <nav className="">
        <ol className="flex">
          <li className="flex items-center text-center gap-2 pr-1 text-svgColorDark hover:text-black hover:cursor-pointer">
            <span>
              <HiHome className="scale-125"/>
            </span>
            <Link href="#" className="text-black">Home</Link>
          </li>
          <li className="flex items-center text-center gap-2 px-1">
            <span>
              <IoIosArrowForward className="stroke-[8] fill-svgColor" />
            </span>
            <Link href="#">Users</Link>
          </li>
          <li className="flex items-center text-center gap-2 px-1">
            <span>
              <IoIosArrowForward className="stroke-[8] fill-svgColor" />
            </span>
            <Link href="#">List</Link>
          </li>
        </ol>
      </nav>
      <h1 className="font-semibold text-2xl my-4">All Users</h1>
    </div>
  );
}

export default UsersListNav;
