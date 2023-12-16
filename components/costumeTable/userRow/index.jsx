import React from "react";
import Image from "next/image";

import Buttons from "@/components/buttons";

// icons
import { HiTrash } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";

function UserRow({ setUserId, user, setPageOfOpen, thItemsData }) {
  //userin içindeki verilerin tektek atanması
  const arr = Object.entries(user);
  return (
    <tr className="hover:bg-hoverBgColor border max-h-fit">
      <td className="p-4 text-center">
        <input className="accent-primary scale-105 w-4 h-4" type="checkbox" id={user.id} />
      </td>
      {arr.map((item, idx) => (
        thItemsData.find((thItem) => thItem.toLocaleLowerCase() == item[0]?.toLocaleLowerCase()) &&
        <>
          {item[0].toLowerCase() == "name" ||item[0].toLowerCase() == "imgsrc" && <td key={idx} className="flex p-4 gap-4">
            <Image
              // src={console.log(item[0].toLowerCase())}
              alt={item[0].toLowerCase == "firstname" && item[1]}
              className="rounded-full max-w-[40px] max-h-[40px]"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-semibold whitespace-nowrap name">{item[0].toLocaleLowerCase == "name" && item[1]}</span>
              <span className="text-sm text-svgColorDark whitespace-nowrap">
                {item[0].toLowerCase() == "email" && item[1]}
              </span>
            </div>
          </td>
          }
          {/* <UserRowPiece item={item} key={idx}/> */}
          <td className="p-4 font-semibold whitespace-nowrap">{item[0].toLowerCase() == "position" && item[1]}</td>
          {/* <td className="p-4 font-semibold whitespace-nowrap">{country}</td>
          <td className="p-4 whitespace-nowrap ">
            <div className="flex items-center gap-3">
              <div
                //status active ise yeşil bir bg gösteriyor değilse kırmızı gösteriyor 
                className={`w-2.5 h-2.5 rounded-full ${status == "Active" ? "bg-onlineGreen" : "bg-offlineRed"
                  }`}
              ></div>
              <span>{status}</span>
            </div>
          </td>
          <td className="flex gap-2 py-3 items-center justify-center">
            <Buttons
              title={"Edit user"}
              icon={<FiEdit className="stroke-[3]" />}
              costumeClass={"bg-primary text-white hover:bg-primaryDark"}
              onClickEvent={() => { setPageOfOpen("edit-user"); setUserId(id) }}
            />
            <Buttons
              title={"Delete user"}
              icon={<HiTrash />}
              costumeClass={"bg-danger text-white hover:bg-dangerDark"}
              onClickEvent={() => { setPageOfOpen("delete-user"); setUserId(id) }}
            />
          </td> */}
        </>
      ))}
    </tr>
  );
}

export default UserRow;
