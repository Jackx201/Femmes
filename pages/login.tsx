import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { redirect } from "next/dist/server/api-utils";

const login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date: null,
  });

  const [password, setPassword] = useState('');

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    date: undefined,
    accept: false,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    setFormData(data);
    setShowMessage(true);

    reset();
  };

  const getFormErrorMessage = (name: any) => {
    return (
      errors.name && <small className="p-error">{errors.name.message}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Escriba una contraseña</h6>;

  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una letra minúscula</li>
        <li>Al menos una letra mayúscula</li>
        <li>Al menos un número</li>
        <li>Al menos 8 caracteres</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="container login-container" style={{ height: "100vh" }}>
      <div className="form-demo py-5">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex justify-content-center flex-column py-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registration Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your account is registered under name <b>{formData.name}</b> ;
              it'll be valid next 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center">
          <div className="card">
            <h1 className="text-center">Iniciar Sesión</h1>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form className="p-fluid">
              <div className="field pt-3">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:
                          "Invalid email address. E.g. example@email.com",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <InputText
                        id={field.name}
                        {...field}
                        className={classNames({
                          "p-invalid": fieldState.invalid,
                        })}
                      />
                    )}
                  />
                  <label
                    htmlFor="email"
                    className={classNames(
                      { "p-error": !!errors.email },
                      "fieldLabel"
                    )}
                  >
                    Correo Electrónico*
                  </label>
                </span>
                {getFormErrorMessage("email")}
              </div>
              <div className="field pt-3">
                <span className="p-float-label">
                <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false} />
                  <label
                    htmlFor="password"
                    className={classNames(
                      { "p-error": errors.password },
                      "fieldLabel"
                    )}
                  >
                    Contraseña *
                  </label>
                </span>
                {getFormErrorMessage("password")}
              </div>
              {/* Términos y condiciones */}
              <div className="text-center">
                <a href="http://localhost:3000/">
                  <div>
                  <Button
                  type="button"
                  label="Iniciar Sesión"
                  className="my-2 p-button-success w-5 p-button-rounded"
                />
                  </div>
                </a>
              </div>
            </form>

            <div className="text-center my-3 text-white">
              <a href="/signup">¿Aún no tienes una cuenta? <br /> Crea una aquí</a>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
