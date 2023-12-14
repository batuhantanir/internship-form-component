import React from "react";

import { MdError } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import IconBtn from "@/components/iconBtn";



function UsersInput({ setpageOfOpen, searchValue, setSearchValue }) {
  return (
    <div className="hidden  gap-2 sm:flex sm:w-[500px] lg:w-[40%]">
      <div className="border-r pr-2 lg:w-3/4">
        <input
          className="bg-svgColorLight border-[1.5px] border-svgColor p-2 w-full rounded-lg  placeholder:text-sm focus:outline-primary"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Search for users"
        />
      </div>
      <div className="flex gap-2 items-center">
        <IconBtn
          icon={<IoIosSettings className="scale-150" />}
          onClickEvent={setpageOfOpen}
          openPageKey={"thSetting"}
        />
        <IconBtn icon={<HiTrash className="scale-150" />} hrefLink={"#"} />
        <IconBtn icon={<MdError className="scale-150" />} hrefLink={"#"} />
        <IconBtn
          icon={<BsThreeDotsVertical className="scale-150" />}
          hrefLink={"#"}
        />
      </div>
    </div>
  );
}

export default UsersInput;
