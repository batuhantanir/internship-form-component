import React from 'react'

import { RxCross2 } from "react-icons/rx";

//Input Component
import FormInputPiece from "../formInputPiece";

import IconBtn from '../iconBtn';

function CostumeForm({ headerName, formData, handleSubmit, setpageOfOpen, btnName }) {
    return (
        <div className=" bg-white  w-full max-w-2xl px-4 h-auto rounded-lg mx-4">
            <div className="flex justify-between border-b px-3 py-4">
                <h2 className="font-semibold text-xl">{headerName}</h2>
                <IconBtn onClickEvent={setpageOfOpen} openPageKey={""} icon={<RxCross2 />} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6  gap-5 px-3 py-4">
                    {formData.map((data, idx) => (
                        <FormInputPiece data={data} key={idx} />
                    ))}
                </div>
                <div className="border-t w-full p-5">
                    <button className="bg-primary text-white text-sm w-fit text-center gap-2 font-medium px-5 py-3 rounded-lg whitespace-nowrap" onClick={() => setpageOfOpen("")} type="submit">{btnName}</button>
                </div>
            </form>
        </div>
    )
}

export default CostumeForm