import React from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { RxCross2 } from "react-icons/rx";

//Input Component
import FormInputPiece from "../formInputPiece";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
  depertmant: Yup.string().required(),
  company: Yup.string().required(),
})

function AddUserForm({ setpageOfOpen }) {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      depertmant: '',
      company: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className=" bg-white  w-full max-w-2xl px-4 h-auto rounded-lg">
      <div className="flex justify-between border-b px-3 py-4">
        <h2 className="font-semibold text-xl">Add new user</h2>
        <button onClick={() => setpageOfOpen("")} ><RxCross2 /></button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6  gap-5 px-3 py-4">
          <FormInputPiece labelName="First Name" forHtml="firstName" typeName="text" name="firstName" id="firstName" placeholderName="Bonnie" handleChange={handleChange} values={values.firstName} />
          <FormInputPiece labelName="Last Name" forHtml="lastName" typeName="text" name="lastName" id="lastName" placeholderName="Green" handleChange={handleChange} values={values.lastName} />
          <FormInputPiece labelName="Email" forHtml="email" typeName="text" name="email" id="email" placeholderName="example@company.com" handleChange={handleChange} values={values.email} />
          <FormInputPiece labelName="Phone Number" forHtml="phoneNumber" typeName="text" name="phoneNumber" id="phoneNumber" placeholderName="e.g. +(12)3456 789" handleChange={handleChange} values={values.phoneNumber} />
          <FormInputPiece labelName="Departmant" forHtml="depertmant" typeName="text" name="depertmant" id="depertmant" placeholderName="Development" handleChange={handleChange} values={values.depertmant} />
          <FormInputPiece labelName="company" forHtml="company" typeName="text" name="company" id="company" placeholderName="123456" handleChange={handleChange} values={values.company} />
        </div>
        <div className="border-t w-full p-5">
          <button className="bg-primary text-white text-sm w-fit text-center gap-2 font-medium px-5 py-3 rounded-lg whitespace-nowrap" type="submit">Add user</button>
        </div>
      </form>
    </div>)
}

export default AddUserForm;
