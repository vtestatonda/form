import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ContainerForm,
  Button,
  Subtitle,
  Error,
  ContainerInput,
  Input,
} from "./styles";

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
  phone: Yup.string().matches(
    /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im,
    "fomato invalido"
  ),
  email: Yup.string()
    .email("Este correo electronico es invalido")
    .required("este campo es obligatorio"),
  password: Yup.string()
    .required("este campo es obligatorio")
    .min(8, "debe tener al menos 8 caracteres")
    //.matches(/(?=\w*[A-Z])/, "debe tener al menos una mayuscua"),
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\w).{8,12}$/g,
      "debe tener al menos una may., un signo, un numero"
    ),
  repeatpassword: Yup.string()
    .required("este campo es obligatorio")
    .oneOf([Yup.ref("password")], "las contraseñas no coinciden"),
});

const Register = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          id: "",
          phone: "",
          email: "",
          password: "",
          repeatpassword: "",
        }}
        validationSchema={RegisterSchema}
        //a continuacion mostramos 3 tipos de validaciones, el programa queda configurado para submit
        // validateOnBlur
        //el onblur es una caracteristica de formik que me permite colocar textos en un sierto momento, en este caso lo usamos para el error que aparezca uando sea necesario.
        //para que funciones tengo que sacar el submit de ContainerForm y de button. En styles tengo que ir a containerforma y cambiar styled.form` por  styled.div`. Agregar en el erro touched.name
        onSubmit={(values) => console.log(values)}
        validateOnSubmit
        //me muestra los errores una vez tocado el boton final.
        //validateOnChange
        //esta validacion es a tiempo real. cada letra que coloco o borro verifica y lo muestra. Es medio molesto prque se actualiza en cada tecla
        //para que funciones tengo que hacer lo mismo que para validate onblur y sacar lo de touched.name
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ContainerForm onSubmit={handleSubmit}>
            <Subtitle> Formulario de registro </Subtitle>
            <ContainerInput>
              <Input
                placeholder="nombre completo"
                name="name"
                onChange={handleChange("name")}
                // onBlur={handleBlur("name")}
                value={values.name}
                //touched.name && errors.name = si toque el campo name y el campo name tiene un error entonces me va a mostrar el error.
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="numero de documento"
                name="id"
                onChange={handleChange("id")}
                // onBlur={handleBlur("id")}
                value={values.id}
              />
              {touched.id && errors.id && <Error>{errors.id}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="numero de telefono"
                name="phone"
                onChange={handleChange("phone")}
                // onBlur={handleBlur("phone")}
                value={values.phone}
              />
              {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="correo electronico"
                name="email"
                onChange={handleChange("email")}
                // onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Creá tu contraseña"
                name="password"
                onChange={handleChange("password")}
                // onBlur={handleBlur("password")}
                value={values.password}
                type={visible ? "text" : "password"}
              />
              {touched.password && errors.password && (
                <Error>({errors.password})</Error>
              )}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Repetí la contraseña"
                name="repeatpassword"
                onChange={handleChange("repeatpassword")}
                // onBlur={handleBlur("repearpassword")}
                value={values.repeatpassword}
                type={visible ? "text" : "password"}
              />
              {touched.repeatpassword && errors.repeatpassword && (
                <Error>({errors.repeatpassword})</Error>
              )}
            </ContainerInput>
            <Button type="button" onClick={() => setVisible(!visible)}>
              {visible ? "Ocultar contraseña" : "mostrar contraseña"}
            </Button>
            <Button type="submit"> Registrarme</Button>
          </ContainerForm>
        )}
      </Formik>
    </Container>
  );
};
export default Register;
