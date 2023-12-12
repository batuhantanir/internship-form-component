import React from "react";

import { MdError } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

function UsersInput() {
  return (
    <div className="hidden  gap-5 sm:flex sm:w-[500px] lg:w-[40%]">
      <div className="border-r pr-2 lg:w-3/4">
        <input
          className="bg-svgColorLight border-[1.5px] border-svgColor p-2 w-full rounded-lg  placeholder:text-sm focus:outline-primary"
          type="text"
          placeholder="Search for users"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="#"
          className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
        >
          <IoIosSettings className="scale-150" />
        </Link>
        <Link
          href="#"
          className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
        >
          <HiTrash className="scale-150" />
        </Link>
        <Link
          href="#"
          className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
        >
          <MdError className="scale-150" />
        </Link>
        <Link
          href="#"
          className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
        >
          <BsThreeDotsVertical className="scale-150" />
        </Link>
      </div>
    </div>
  );
}

export default UsersInput;
