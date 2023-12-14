import React from "react";
import UsersListNav from "./usersListNav";
import UsersInput from "./usersInput";
import ButtonContainer from "./buttonContainer";

function UsersListHead(props) {
  return (
    <div className="px-2 py-2">
      <UsersListNav />
      <div className="flex justify-between">
        <UsersInput {...props} />
        <ButtonContainer setpageOfOpen={props.setpageOfOpen} />
      </div>
    </div>
  );
}

export default UsersListHead;
