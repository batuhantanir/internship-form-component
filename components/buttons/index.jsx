import React from "react";

function Buttons({ title, icon, costumeClass }) {
  return (
    <button
      className={`flex items-center gap-2 w-fit font-semibold px-3 py-2 rounded-lg ${costumeClass}`}
    >
      <span>{icon}</span>
      <span className="text-sm">{title}</span>
    </button>
  );
}

export default Buttons;
