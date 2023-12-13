import React from 'react'

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
    currentPassword: Yup.string().required(),
    newPassword: Yup.string().required(),
})


function EditUserFrom({ setpageOfOpen }) {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            depertmant: '',
            company: '',
            currentPassword: '',
            newPassword: '',
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
    },
    {
        labelName: "Current Password", forHtml: "currentPassword", typeName: "password", name: "currentPassword", id: "currentPassword", placeholderName: "••••••••", handleChange: handleChange, values: values.currentPassword
    },
    {
        labelName: "New Password", forHtml: "newPassword", typeName: "password", name: "newPassword", id: "newPassword", placeholderName: "••••••••", handleChange: handleChange, values: values.newPassword
    }]

    return (
        <CostumeForm headerName={"Edit user"} formData={formData} handleSubmit={handleSubmit} setpageOfOpen={setpageOfOpen} btnName={"Save all"} />
    )
}

export default EditUserFrom