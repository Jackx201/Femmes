import { useRouter } from "next/router";
import HeaderComponent from "../components/Header";
import { useState, useEffect } from "react";
import { UploadFileComponent } from "../components/UploadFileComponent";
import { InputText } from "primereact/inputtext";
import CascadeComponent from "../components/SelectComponent";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from "primereact/button";

export default function NuevaPublicacion() {

  const [newPost, setNewPost] = useState({
    titulo: "",
    descripcion: "",
    usuario: "",
    fechaDesaparicion: new Date(),
    estado: "",
    status: "",
    img: "",
    comentarios: [],
    numeroContacto: "",
    ultimaLocalizacion: "",
  });

  const reset = () => {
    setNewPost({
      titulo: "",
      descripcion: "",
      usuario: "",
      fechaDesaparicion: new Date(),
      estado: "",
      status: "",
      img: "",
      comentarios: [],
      numeroContacto: "",
      ultimaLocalizacion: "",
    })
  }

  const handleChange = (e: any) =>
  setNewPost({ ...newPost, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault(); 
    console.log(newPost)
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h2>Reportar Desaparición</h2>
      </div>

      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid"></div>
          <div className="grid">
            <div className="col">
              <UploadFileComponent></UploadFileComponent>
            </div>
            <div className="col-5 ">
              <div className="mb-4">
              <label htmlFor="titulo">
                  <i className="pi pi-id-card" />
                  <b> Nombre Completo</b>
                </label>
                <InputText
                  style={{ minWidth: "17rem" }}
                  className="mt-2"
                  placeholder="Nombre de la víctima"
                  name="titulo"
                  onChange={handleChange}
                ></InputText>
              </div>
              <div className="mb-5">
                <label htmlFor="fechaDesaparicion">
                  <i className="pi pi-calendar-plus" />{" "}
                  <b>Fecha de desaparición</b>
                </label>
                <Calendar
                  name="fechaDesaparicion"                  
                  value={newPost.fechaDesaparicion}
                  onChange={handleChange}
                  dateFormat="dd/mm/yy"
                  mask="99/99/9999"
                  showIcon
                  className="mt-2"
                  style={{ minWidth: "17rem" }}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="">
                  <i className="pi pi-map-marker" />
                  <b> Estado y Municipio</b>
                </label>
                <CascadeComponent></CascadeComponent>
              </div>
              <div className="mb-3">
              <label htmlFor="titulo">
                  <i className="pi pi-whatsapp" />
                  <b> Número de Contacto</b>
                </label>
                <InputText
                  style={{ minWidth: "17rem" }}
                  className="mt-2"
                  placeholder="Número de Teléfono"
                  name="numeroContacto"
                  onChange={handleChange}
                ></InputText>
              </div>
            </div>
          </div>
          <div className="my-5">
                <div className="text-center">
                  <div className="my-1">
                  <label htmlFor="titulo">
                    <i className="pi pi-info-circle" />
                    <b> Brindenos toda la información posible</b>
                  </label>
                  </div>
                  <br />
                  <InputTextarea name="descripcion" rows={5} cols={90} value={newPost.descripcion} onChange={handleChange} />
                </div>
              </div>

              <div className="grid mb-5">
                <div className="col">
                  <Button
                    label="Descartar"
                    type="reset"
                    icon="pi pi-trash"
                    onClick={reset}
                    className="p-button p-button-success p-component px-5 p-button-rounded"
                  />
                </div>

                <div className="col">
                  <Button
                    label="Publicar"
                    onSubmit={handleSubmit}
                    icon="pi pi-check-circle"
                    className="p-button p-component px-5 p-button-rounded pink-button"
                  />
                </div>
              </div>
        </form>
      </div>
    </>
  );
}

