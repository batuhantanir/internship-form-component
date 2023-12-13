import React from 'react'

function FormInputPiece({data}) {
    const { labelName, forHtml, typeName, name, id, placeholderName, handleChange, values } = data;
    return (
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
                required
            />
        </label>
    )
}

export default FormInputPiece;