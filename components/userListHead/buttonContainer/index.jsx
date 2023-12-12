import { HiDocumentDownload } from "react-icons/hi";
import React from "react";
import Buttons from "@/components/buttons";

import { AiOutlinePlus } from "react-icons/ai";
function ButtonContainer() {
  return (
    <div className="flex gap-3 w-full sm:w-fit ">
      <Buttons
        title={"Add user"}
        icon={<AiOutlinePlus className="stroke-[50]"/>}
        costumeClass={"bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"}
      />
      <Buttons
        title={"Export"}
        icon={<HiDocumentDownload />}
        costumeClass={"bg-white text-black border border-svgColor hover:bg-hoverBgColor w-[50%] sm:w-fit"}
      />
    </div>
  );
}

export default ButtonContainer;
