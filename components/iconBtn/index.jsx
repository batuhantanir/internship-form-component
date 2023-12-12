import React from 'react'
import Link from "next/link";

function IconBtn({hrefLink, icon}) {
  return (
        <Link
        href={hrefLink}
        className="hover:bg-hoverBgColor p-2 rounded hover:text-black text-svgColorDark"
      >
        {icon}
      </Link>
  )
}

export default IconBtn