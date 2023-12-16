import React from "react";

import {v4 as uuidv4} from 'uuid';

import { useFormik } from "formik";
import * as Yup from 'yup';

import CostumeForm from "../costumeForm";

const validationSchema = Yup.object({
  //klasik yup validation işlemleri ekstra birşey yok
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
  company: Yup.number().required(),
  position: Yup.string().required(),
  country: Yup.string().required(),
  imgSrc: Yup.string().required(),
})

function addUser(values, data) {
  // localStorage'de usersData var mı kontrolü eğer yok ise data değişkenine boş array atar
  if (!data) {
    data = [];
    // data değişkenine formdan gelen verileri ekler
    data.push(values);
    // localStorage ye verileri kaydeder
    localStorage.setItem("usersData", JSON.stringify(data));
    //  verilerin ekrana yansıması için sayfayı yeniler
    window && window.location.reload();
    //return ediyoruz çünkü sonraki işlemleri yapmaya gerek yok ilk ekleeme işlemi olduğu için
    return;
  }
  // data değişkenine formdan gelen verileri ekler
  data.push(values);
  // localStorage ye verileri kaydeder
  localStorage.setItem("usersData", JSON.stringify(data));
}

function AddUserForm({ setPageOfOpen, data }) {

  const { handleSubmit, handleChange, values } = useFormik({
    // formun başlangıç değerleri
    initialValues: {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      position: '',
      country: '',
      imgSrc: 'https://picsum.photos/50/50',
      status: "Active",
    },
    validationSchema,
    // form submit edildiğinde çalışacak fonksiyon
    onSubmit: (values, { setSubmitting }) => {
      // name key'ini firstName + lastName'e eşitler ve values'ya ekler 
      const updatedValues = {
        ...values,
        name: values.firstName + " " + values.lastName,
      };
      // addUser fonksiyonunu çalıştırır
      addUser(updatedValues, data);
      // formu submit ettikten sonra formu resetler
      setSubmitting(false);
      // setPageOfOpen state'ini boş string yapar
      setPageOfOpen("");
    },
  });
  // formda listelenecek inputların verileri
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
    labelName: "Departmant", forHtml: "position", typeName: "text", name: "position", id: "position", placeholderName: "Frontend", handleChange: handleChange, values: values.position
  },
  {
    labelName: "Company", forHtml: "company", typeName: "number", name: "company", id: "company", placeholderName: "123456", handleChange: handleChange, values: values.company
  },
  {
    labelName: "Country", forHtml: "country", typeName: "text", name: "country", id: "country", placeholderName: "USA", handleChange: handleChange, values: values.country
  },]

  return (
    <CostumeForm headerName={"Add new user"} formData={formData} handleSubmit={handleSubmit} setPageOfOpen={setPageOfOpen} btnName={"Add user"} />
  )
}

export default AddUserForm;
