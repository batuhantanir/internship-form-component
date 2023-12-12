import { HiDocumentDownload } from "react-icons/hi";
import React from "react";
import Buttons from "@/components/buttons";

import { AiOutlinePlus } from "react-icons/ai";
function ButtonContainer({ setpageOfOpen }) {
  return (
    <div className="flex gap-3 w-full sm:w-fit ">
      <Buttons
        title={"Add user"}
        id={"add-user"}
        icon={<AiOutlinePlus className="stroke-[50]" />}
        costumeClass={
          "bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"
        }
        onClickEvent={setpageOfOpen}
      />
      <Buttons
        title={"Export"}
        id={"export"}
        icon={<HiDocumentDownload />}
        costumeClass={
          "bg-white text-black border border-svgColor hover:bg-hoverBgColor w-[50%] sm:w-fit"
        }
      />
    </div>
  );
}

export default ButtonContainer;
