"use client";
import React, { useState } from "react";
//components
import CostumeTable from "@/components/costumeTable";

//icons
import UsersListHead from "@/components/userListHead";

import data from "@/mock/userList.js";

function List() {
  const [pageOfOpen, setpageOfOpen] = useState("");
  console.log(pageOfOpen);
  return (
    <div className="">
      <UsersListHead setpageOfOpen={setpageOfOpen}/>
      <CostumeTable data={data} setpageOfOpen={setpageOfOpen}/>
    </div>
  );
}

export default List;
