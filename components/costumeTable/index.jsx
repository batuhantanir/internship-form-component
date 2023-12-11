import React from "react";
import UserRow from "./userRow";

function CostumeTable() {
  return (
    <table className="table-fixed min-w-full">
      <thead>
        <tr>
          <td>
            <input type="checkbox" name="#" id="#" />
          </td>
          <td>NAME</td>
          <td>POSITION</td>
          <td>COUNTRY</td>
          <td>STATUS</td>
        </tr>
      </thead>
      <tbody>
        <UserRow />
      </tbody>
    </table>
  );
}

export default CostumeTable;
