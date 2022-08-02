import { useRouter } from "next/router";
import HeaderComponent from "../../../components/Header";
import { useState, useEffect } from "react";

export default function PostsPage() {
  
  const { query } = useRouter();

  const [newPost, setNewPost] = useState({
    titulo: "",
    descripcion: "",
    usuario: "",
    fechaDesaparicion: "",
    estado: "",
    status: "",
    img: "",
    comentarios: [],
    numeroContacto: "",
    ultimaLocalizacion: "",
  });

  const getPost = async () => {
    const res = await fetch(
      `http://localhost:8080/api/publicaciones/${query.id}`
    );
    const data = await res.json();
    setNewPost({
      titulo: data.titulo,
      descripcion: data.descripcion,
      usuario: data.usuario,
      fechaDesaparicion: data.fechaDesaparicion,
      estado: data.estado,
      status: data.status,
      img: data.img,
      comentarios: data.comentarios,
      numeroContacto: data.numeroContacto,
      ultimaLocalizacion: data.ultimaLocalizacion
    });
  };

  useEffect(() => {
    if(query.id) getPost();
  }, [query.id]);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container" id="statusBanner">
        <h1>Ayúdanos a localizarla</h1>
      </div>

      <div className="container mt-3">
        <div className="grid">
          <div className="col picture">
            <img
              src={newPost.img}
              alt=""
              className="picture"
            />
          </div>

          {/* Begin Info */}
          <div className="col-8 ">
            <h1 id="nombre"> {newPost.titulo} </h1>

            <div className="user-info">
              <h5>
                <i className="mr-1 pi pi-user"></i> Publicado: {newPost.usuario + " el día: " + newPost.fechaDesaparicion} 
              </h5>
            </div>

            <div className="details">
              <p>
                {" "}
                <i className="mr-1 pi pi-calendar-times"></i>
                <b> Fecha de desaparición: { newPost.fechaDesaparicion} </b>
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-phone"></i> <b> Por favor informe: </b>{newPost.numeroContacto}
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-map"></i> <b> Estado:</b> {newPost.estado}
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-map-marker"></i>{" "}
                <b> Última vez vista:</b> {newPost.ultimaLocalizacion}
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-exclamation-circle"></i>{" "}
                <b> Status:</b> {newPost.status}
              </p>
            </div>
            <hr />
            <p className="info">
             {newPost.descripcion}
            </p>
          </div>
          {/* End Info */}
        </div>
      </div>
    </>
  );
}
