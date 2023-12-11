import React from "react";
//components
import Buttons from "@/components/buttons";
import CostumeTable from "@/components/costumeTable";

//icons
import { HiTrash } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import UsersListHead from "@/components/userListHead";

function List() {
  return (
    <div>
      {/* <Buttons title={"Delete user"} icon={<HiTrash />} costumeClass={"bg-danger text-white"}/>
      <Buttons title={"Edit user"} icon={<FiEdit className="stroke-[3]"/>} costumeClass={"bg-primary text-white"}/> */}
      <UsersListHead />
      {/* <CostumeTable/> */}
    </div>
  );
}

export default List;
