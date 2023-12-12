import React from "react";
import UsersListNav from "./usersListNav";
import UsersInput from "./usersInput";
import ButtonContainer from "./buttonContainer";

function UsersListHead({setpageOfOpen}) {
  return (
    <div className="px-2 py-2">
      <UsersListNav />
      <div className="flex justify-between">
        <UsersInput />
        <ButtonContainer setpageOfOpen={setpageOfOpen}/>
      </div>
    </div>
  );
}

export default UsersListHead;
