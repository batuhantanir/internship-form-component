import React from "react";

function Buttons({ title, icon, costumeClass, onClickEvent, id }) {
  return (
    //props ile alınan verileri kullanarak buton oluşturuldu.
    <button
      id={id}
      className={`flex items-center justify-center text-center gap-2 font-semibold px-3 py-2 rounded-lg whitespace-nowrap  ${costumeClass}`}
      onClick={onClickEvent ? () => onClickEvent(id) : () => {}}
    >
      <span>{icon}</span>
      <span className="text-sm">{title}</span>
    </button>
  );
}

export default Buttons;
