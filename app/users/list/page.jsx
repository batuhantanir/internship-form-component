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
  const [searchValue, setSearchValue] = useState("");
  console.log(pageOfOpen);
  return (
    <div>
      <div className="">
        <UsersListHead setpageOfOpen={setpageOfOpen} searchValue={searchValue} setSearchValue={setSearchValue} />
        <CostumeTable data={data} setpageOfOpen={setpageOfOpen} searchValue={searchValue} />
      </div>
      <div className={`flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 h-screen w-full overflow-y-scroll ${pageOfOpen == '' ? "hidden" : "block"} bg-[#0000006d]`}>
        {pageOfOpen == 'add-user' && <AddUserForm setpageOfOpen={setpageOfOpen} />}
        {pageOfOpen == 'edit-user' && <EditUserFrom setpageOfOpen={setpageOfOpen} />}
        {/* {pageOfOpen == 'delete-user' && } */}
      </div>
    </div>
  );
}

export default List;
