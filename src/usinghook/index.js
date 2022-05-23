//otra forma de crear el formulario con un hook de formik
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ContainerForm,
  Button,
  Subtitle,
  Error,
  ContainerInput,
  Input,
} from "../screens/register/styles";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("este campo es obligatorio")
    .matches(/^[a-zA-Z\s]*$/, "solo acepta letras"),
  id: Yup.number()
    .required("este campo es obligatorio")
    .typeError("solo acepta numeros")
    .min(30000000, "El documento debe ser mayor a 30 millones")
    .max(60000000, "El documento debe ser menor a 60 millones"),
  //en type number, min representa el numero minimo, en string representa la cantidad de letras minumos.
  phone: Yup.number().typeError("solo acepta numeros"),
  email: Yup.string()
    .email("Este correo electronico es invalido")
    .required("este campo es obligatorio"),
  password: Yup.string()
    .required("este campo es obligatorio")
    .min(8, "debe tener al menos 8 caracteres")
    .matches(/(?=\w*[A-Z])/, "debe tener al menos una mayuscua"),
  repeatpassword: Yup.string()
    .required("este campo es obligatorio")
    .oneOf([Yup.ref("password")], "las contraseñas no coinciden"),
});

const Register = () => {
  const [visible, setVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      phone: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => console.log(values),
  });
  return (
    <Container>
      <ContainerForm onSubmit={formik.handleSubmit}>
        <Subtitle> Formulario de registro </Subtitle>
        <ContainerInput>
          <Input
            placeholder="nombre completo"
            name="name"
            onChange={formik.handleChange("name")}
            // onBlur={handleBlur("name")}
            value={formik.values.name}
            //touched.name && errors.name = si toque el campo name y el campo name tiene un error entonces me va a mostrar el error.
          />
          {formik.touched.name && formik.errors.name && (
            <Error>{formik.errors.name}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="numero de documento"
            name="id"
            onChange={formik.handleChange("id")}
            // onBlur={handleBlur("id")}
            value={formik.values.id}
          />
          {formik.touched.id && formik.errors.id && (
            <Error>{formik.errors.id}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="numero de telefono"
            name="phone"
            onChange={formik.handleChange("phone")}
            // onBlur={handleBlur("phone")}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Error>{formik.errors.phone}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="correo electronico"
            name="email"
            onChange={formik.handleChange("email")}
            // onBlur={handleBlur("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Creá tu contraseña"
            name="password"
            onChange={formik.handleChange("password")}
            // onBlur={handleBlur("password")}
            value={formik.values.password}
            type={visible ? "text" : "password"}
          />
          {formik.touched.password && formik.errors.password && (
            <Error>({formik.errors.password})</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Repetí la contraseña"
            name="repeatpassword"
            onChange={formik.handleChange("repeatpassword")}
            // onBlur={handleBlur("repearpassword")}
            value={formik.values.repeatpassword}
            type={visible ? "text" : "password"}
          />
          {formik.touched.repeatpassword && formik.errors.repeatpassword && (
            <Error>({formik.errors.repeatpassword})</Error>
          )}
        </ContainerInput>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar contraseña" : "mostrar contraseña"}
        </Button>
        <Button type="submit"> Registrarme</Button>
      </ContainerForm>
    </Container>
  );
};
export default Register;
