import { FiEdit } from "react-icons/fi"; 
import React from "react";
//components
import Buttons from "@/components/buttons";

//icons
import { HiTrash } from "react-icons/hi"; 

function List({params}) {
  console.log(params)
  return (
    <div>
      {/* <Buttons title={"Delete user"} icon={<HiTrash />} costumeClass={"bg-danger text-white"}/>
      <Buttons title={"Edit user"} icon={<FiEdit className="stroke-[3]"/>} costumeClass={"bg-primary text-white"}/> */}
    </div>
  );
}

export default List;
