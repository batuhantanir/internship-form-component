import React, { useState } from 'react'

import { useFormik } from "formik";
import * as Yup from 'yup';

import CostumeForm from "../costumeForm";

//verileri değiştiren fonksiyon
function changeUser(data, values, userId) {
    console.log(data);
    //datanın içinde userid ye göre arama yapıp buluyoruz
    const changeData = data?.find((element) => element.id == userId);
    //bulduğumuz verileri eşleştirip eğer değişmiş bir veri var ise güncelliyoruz
    changeData.firstName != values.firstName && (changeData.firstName = values.firstName);
    changeData.lastName != values.lastName && (changeData.lastName = values.lastName);
    changeData.name != values.name && (changeData.name = values.name);
    changeData.email != values.email && (changeData.email = values.email);
    changeData.phoneNumber != values.phoneNumber && (changeData.phoneNumber = values.phoneNumber);
    changeData.position != values.position && (changeData.position = values.position);
    changeData.company != values.company && (changeData.company = values.company);
    //verileri localStorage'e kaydediyoruz
    localStorage.setItem("usersData", JSON.stringify(data));
}

const validationSchema = Yup.object({
    // klasik yup tanımlamaları ekstra bir şey yok
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.number().required(),
    position: Yup.string().required(),
    company: Yup.number().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
})


function EditUserFrom({ userId, data, setPageOfOpen }) {
    const user = data.find((element) => element.id == userId);
    const [errors, setErrors] = useState({}); //hata mesajlarını tutan state
    
    const { handleSubmit, handleChange, values } = useFormik({
        //initialValues ile formun içindeki inputların başlangıç değerlerini belirledim
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: Number(user.phoneNumber),
            position: user.position,
            company: Number(user.company),
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            if (values.password == values.confirmPassword) {
                // name key'ini firstName + lastName'e eşitler ve values'ya ekler 
                const updatedValues = {
                    ...values,
                    name: values.firstName + " " + values.lastName,
                };
                // changeUser fonksiyonunu çalıştırır
                changeUser(data, updatedValues, userId);
                // formu submit ettikten sonra formu resetler
                setSubmitting(false);
                // setPageOfOpen state'ini boş string yapar
                setPageOfOpen("");
            } else {
                // eğer password ve confirmPassword aynı değilse errors state'ini günceller
                setErrors({password:"Passwords do not match"})
            }
        },
    });

    const formData = [{
        labelName: "First Name", forHtml: "firstName", typeName: "text", name: "firstName", id: "firstName", placeholderName: user.firstName, handleChange: handleChange, values: values.firstName,
    },
    {
        labelName: "Last Name", forHtml: "lastName", typeName: "text", name: "lastName", id: "lastName", placeholderName: user.lastName, handleChange: handleChange, values: values.lastName,
    },
    {
        labelName: "Email", forHtml: "email", typeName: "email", name: "email", id: "email", placeholderName: user.email, handleChange: handleChange, values: values.email
    },
    {
        labelName: "Phone Number", forHtml: "phoneNumber", typeName: "number", name: "phoneNumber", id: "phoneNumber", placeholderName: user.phoneNumber, handleChange: handleChange, values: values.phoneNumber
    },
    {
        labelName: "Departmant", forHtml: "position", typeName: "text", name: "position", id: "position", placeholderName: user.position, handleChange: handleChange, values: values.position
    },
    {
        labelName: "Company", forHtml: "company", typeName: "number", name: "company", id: "company", placeholderName: "123456", handleChange: handleChange, values: values.company
    },
    {
        labelName: "Password", forHtml: "password", typeName: "password", name: "password", id: "password", placeholderName: "••••••••", handleChange: handleChange, values: values.password
    },
    {
        labelName: "Confirm Password", forHtml: "confirmPassword", typeName: "password", name: "confirmPassword", id: "confirmPassword", placeholderName: "••••••••", handleChange: handleChange, values: values.confirmPassword, error: errors.password
    }]

    return (
        <CostumeForm headerName={"Edit user"} formData={formData} handleSubmit={handleSubmit} setPageOfOpen={setPageOfOpen} btnName={"Save all"} />
    )
}

export default EditUserFrom