"use client";
import React from "react";
//components
import CostumeTable from "@/components/costumeTable";

//icons
import UsersListHead from "@/components/userListHead";

import data from "@/mock/userList.js";

function List() {
  return (
    <div className="">
      <UsersListHead />
      <CostumeTable data={data} />
    </div>
  );
}

export default List;
