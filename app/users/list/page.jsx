"use client";
import React, { useState } from "react";
//components
import CostumeTable from "@/components/costumeTable";

//icons
import UsersListHead from "@/components/userListHead";

import data from "@/mock/userList.js";
import AddUserForm from "@/components/addUserForm";
import EditUserFrom from "@/components/editUserForm";

function List() {
  const [pageOfOpen, setpageOfOpen] = useState("");
  return (
    <div>
      <div className="">
        <UsersListHead setpageOfOpen={setpageOfOpen} />
        <CostumeTable data={data} setpageOfOpen={setpageOfOpen} />
      </div>
      <div className={`flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 h-screen w-full ${pageOfOpen == "" ? "hidden" : "block"} bg-[#0000006d]`}>
        {pageOfOpen == 'add-user' && <AddUserForm setpageOfOpen={setpageOfOpen} />}
        {pageOfOpen == 'add-user' && <EditUserFrom setpageOfOpen={setpageOfOpen} />}
      </div>
    </div>
  );
}

export default List;
