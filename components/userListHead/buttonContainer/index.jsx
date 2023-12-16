import React from "react";
import Buttons from "@/components/buttons";

import { AiOutlinePlus } from "react-icons/ai";

function ButtonContainer({ setPageOfOpen }) {
  return (

    <div className="flex gap-3 w-full sm:w-fit mx-5">
      {/* //add user butonu oluşturuldu */}
      <Buttons
        title={"Add user"}
        id={"add-user"}
        icon={<AiOutlinePlus className="stroke-[50]" />}
        costumeClass={
          "bg-primary text-white hover:bg-primaryDark w-full sm:w-fit"
        }
        onClickEvent={()=>setPageOfOpen("add-user")}
      />
    </div>
  );
}

export default ButtonContainer;
