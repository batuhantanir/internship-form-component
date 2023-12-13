import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React from "react";
import UserRow from "./userRow";
import IconBtn from "../iconBtn";
import Buttons from "../buttons";

function CostumeTable({ data, setpageOfOpen }) {
  const thItemsData = JSON.parse(localStorage.getItem("thItems"));
  const dataShowingBetween = '1 - 20';
  const totalData = '2290';
  const slicenumber = 20;
  return (
    <div className="overflow-x-auto">
      <table className="table-fixed min-w-full px-2">
        <thead className="bg-hoverBgColor py-2">
          <tr className="">
            <th className="p-4">
              <input className="accent-primary scale-105 w-4 h-4" type="checkbox" name="#" id="#" />
            </th>
            {thItemsData?.map((item) => (
              <th className="p-4 text-xs font-medium uppercase text-svgColorDark text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(slicenumber - 20, slicenumber).map((user, idx) => (
            <UserRow user={user} key={idx} setpageOfOpen={setpageOfOpen} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between px-6 py-5">
        <div className="flex items-center">
          <IconBtn hrefLink='' icon={<IoIosArrowBack className="scale-125 stroke-[30]" />} />
          <IconBtn hrefLink={''} icon={<IoIosArrowForward className="scale-125 stroke-[30]" />} />
          <span>
            Showing <span>{dataShowingBetween}</span> of <span>{totalData}</span>
          </span>
        </div>
        <div className="flex gap-4">
          <Buttons title={"Previous"} icon={<IoIosArrowBack className="stroke-[15] scale-95" />} costumeClass={
            "bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"
          } />
          <Buttons title={"Next"} icon={<IoIosArrowForward className="stroke-[15] scale-95" />} costumeClass={
            "bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"
          } />
        </div>
      </div>
    </div>
  );
}

export default CostumeTable;
