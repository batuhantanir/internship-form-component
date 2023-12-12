import React from "react";
import UserRow from "./userRow";

function CostumeTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-fixed min-w-full px-2">
        <thead className="bg-hoverBgColor py-2">
          <tr className="">
            <th className="p-4">
              <input type="checkbox" name="#" id="#" />
            </th>
            <th className="p-4 text-xs font-medium uppercase text-svgColorDark text-left">
              NAME
            </th>
            <th className="p-4 text-xs font-medium uppercase text-svgColorDark text-left">
              POSITION
            </th>
            <th className="p-4 text-xs font-medium uppercase text-svgColorDark text-left">
              COUNTRY
            </th>
            <th className="p-4 text-xs font-medium uppercase text-svgColorDark text-left">
              STATUS
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((user, idx) => (
            <UserRow user={user} key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CostumeTable;
