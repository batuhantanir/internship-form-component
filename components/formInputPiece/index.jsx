import { BiErrorCircle } from "react-icons/bi"; 
import React from 'react'

function FormInputPiece({ data }) {
    //datada ki değişkenler tektek tanımlandı
    const { labelName, forHtml, typeName, name, id, placeholderName, handleChange, values, error } = data;
    return (
        //verilere göre bir input yapısı oluşturuldu
        <label className="flex flex-col col-span-6 sm:col-span-3" htmlFor={forHtml}>
            <span className='text-sm font-medium mb-2'>{labelName}</span>
            <input
                className="bg-svgColorLight border-[1.5px] border-svgColor p-2 w-full rounded-lg  placeholder:text-sm focus:outline-primary"
                type={typeName}
                name={name}
                id={id}
                placeholder={placeholderName}
                onChange={handleChange}
                values={values}
                value={values}
                required
            />
            {error && <span className="flex items-center gap-2 text-red-500 text-sm mt-2 bg-red-200 border rounded px-4 py-2"><BiErrorCircle />{error}</span>}
        </label>
    )
}

export default FormInputPiece;