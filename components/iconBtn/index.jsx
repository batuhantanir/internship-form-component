import React from 'react'
import Link from "next/link";

function IconBtn({ onClickEvent, icon,openPageKey }) {
  return (
    <button
      onClick={() => (onClickEvent && onClickEvent({openPageKey}))}
      className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
    >
      {icon}
    </button>
  )
}

export default IconBtn