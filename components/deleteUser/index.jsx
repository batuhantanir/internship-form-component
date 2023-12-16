import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from 'react'
import IconBtn from '../iconBtn'
import { RxCross2 } from 'react-icons/rx'

function DeleteUser({ setPageOfOpen, desc, onClickEventButton }) {
    return (
        //alınan verileri kullanarak silme sayfası oluşturuldu.
        <div className='bg-white  w-full max-w-fit px-4 h-auto rounded-lg mx-4 py-4'>
            <div className='flex justify-end'>
                <IconBtn onClickEvent={() => setPageOfOpen("")} icon={<RxCross2 className="stroke-1" />} />
            </div>
            <div className='flex flex-col items-center gap-8'>
                <div><AiOutlineExclamationCircle className="text-danger w-20 h-20" /></div>
                <div className="text-svgColorDark text-xl w-96 text-center ">{desc}</div>
                <div className="flex gap-3">
                    <button className='bg-danger text-white text-sm w-fit text-center gap-2 font-medium px-5 py-3 rounded-lg whitespace-nowrap' onClick={onClickEventButton && onClickEventButton}>Yes, I'm sure</button>
                    <button className='bg-white border text-sm w-fit text-center gap-2 font-medium px-5 py-3 rounded-lg whitespace-nowrap' onClick={() => setPageOfOpen("")} >No, cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser