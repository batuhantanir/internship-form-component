import React from 'react'

function IconBtn({ onClickEvent, icon, costumeClassName, costumDisabled }) {
  return (
    //alınan verilere göre bir buton oluşturuldu
    <button
      onClick={onClickEvent && onClickEvent}
      className={`hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark ${costumeClassName ? costumeClassName : ""}`}
      disabled={costumDisabled}
    >
      {icon}
    </button>
  )
}

export default IconBtn