import React from "react";
import Image from "next/image";

import Buttons from "@/components/buttons";

// icons
import { HiTrash } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";

function UserRow({ row, thItemsData, setPageOfOpen, setUserId }) {
  return (
    <tr >
      <td className="p-4 text-center">
        <input className="accent-primary scale-105 w-4 h-4" type="checkbox" id={row.id} />
      </td>
      {thItemsData.map((th) => (
        <td key={th} className="p-4 font-semibold whitespace-nowrap">
          {/* Eğer kolon "name" ise, sırasıyla "name", "image" ve "email" değerlerini göster */}
          {th.toLowerCase() === 'name' && (
            <span className="flex gap-4">
              <Image src={row.imgSrc} alt="User" className="rounded-full max-w-[40px] max-h-[40px]" width={40} height={40} />
              <div className="flex flex-col ">
                <div className="font-semibold whitespace-nowrap name">{row.name}</div>
                <div className="text-sm text-svgColorDark whitespace-nowrap">{row.email}</div>
              </div>
            </span>
          )}
          {/* Diğer kolonlar için değeri göster */}
          {th.toLowerCase() === 'status' && <div className="flex items-center gap-3">
            <div
              //status active ise yeşil bir bg gösteriyor değilse kırmızı gösteriyor 
              className={`w-2.5 h-2.5 rounded-full ${row["status"] == "Active" ? "bg-onlineGreen" : "bg-offlineRed"
                }`}
            ></div>
            <span>{row["status"]}</span>
          </div>}
          {th.toLowerCase() !== 'name' && th.toLowerCase() !== 'status' && row[th.toLowerCase()]}
        </td>

      ))}
      <td className="flex gap-2 py-3 items-center justify-center">
        <Buttons
          title={"Edit user"}
          icon={<FiEdit className="stroke-[3]" />}
          costumeClass={"bg-primary text-white hover:bg-primaryDark"}
          onClickEvent={() => { setPageOfOpen("edit-user"); setUserId(row["id"]) }}
        />

        <Buttons
          title={"Delete user"}
          icon={<HiTrash />}
          costumeClass={"bg-danger text-white hover:bg-dangerDark"}
          onClickEvent={() => { setPageOfOpen("delete-user"); setUserId(row["id"]) }}
        />
      </td>
    </tr>
  );
}

export default UserRow;
