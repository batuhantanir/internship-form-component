import React from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';

import CostumeForm from "../costumeForm";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
  depertmant: Yup.string().required(),
  company: Yup.number().required(),
})

function AddUserForm({ setpageOfOpen }) {

  const { handleSubmit, handleChange, values } = useFormik({
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

  const formData = [{
    labelName: "First Name", forHtml: "firstName", typeName: "text", name: "firstName", id: "firstName", placeholderName: "Bonnie", handleChange: handleChange, values: values.firstName,
  },
  {
    labelName: "Last Name", forHtml: "lastName", typeName: "text", name: "lastName", id: "lastName", placeholderName: "Green", handleChange: handleChange, values: values.lastName,
  },
  {
    labelName: "Email", forHtml: "email", typeName: "email", name: "email", id: "email", placeholderName: "example@company.com", handleChange: handleChange, values: values.email
  },
  {
    labelName: "Phone Number", forHtml: "phoneNumber", typeName: "number", name: "phoneNumber", id: "phoneNumber", placeholderName: "e.g. +(12)3456 789", handleChange: handleChange, values: values.phoneNumber
  },
  {
    labelName: "Departmant", forHtml: "depertmant", typeName: "text", name: "depertmant", id: "depertmant", placeholderName: "Development", handleChange: handleChange, values: values.depertmant
  },
  {
    labelName: "Company", forHtml: "company", typeName: "number", name: "company", id: "company", placeholderName: "123456", handleChange: handleChange, values: values.company
  }]

  return (
    <CostumeForm headerName={"Add new user"} formData={formData} handleSubmit={handleSubmit} setpageOfOpen={setpageOfOpen} btnName={"Add user"} />
  )
}

export default AddUserForm;
