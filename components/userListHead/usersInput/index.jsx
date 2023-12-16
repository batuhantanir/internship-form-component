"use client";
import React from "react";

import { HiTrash } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import IconBtn from "@/components/iconBtn";

function UsersInput({ setPageOfOpen, searchValue, setSearchValue, data }) {
  return (
    <div className="hidden  gap-2 sm:flex sm:w-[500px] lg:w-[40%]">
      <div className="border-r pr-2 lg:w-3/4">
        <input
          className="bg-svgColorLight border-[1.5px] border-svgColor p-2 w-full rounded-lg  placeholder:text-sm focus:outline-primary disabled:cursor-not-allowed disabled:bg-svgColorLight disabled:opacity-50"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Search for users"
          disabled={!data}
        />
      </div>
      <div className="flex gap-2 items-center">
        <IconBtn
          icon={<IoIosSettings className="scale-150" />}
        // onClickEvent={()=> setPageOfOpen("thSetting")}
        />
        <IconBtn icon={<HiTrash className="scale-150" />} costumDisabled={!data} costumeClassName={"disabled:text-svgColor disabled:cursor-not-allowed disabled:hover:bg-white"} onClickEvent={() => { setPageOfOpen("all-delete-users"); }} hrefLink={"#"} />
      </div>
    </div>
  );
}

export default UsersInput;
