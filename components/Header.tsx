import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const HeaderComponent = () => {
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () =>  { location.href = '/' }
    },
    {
      label: "Post",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Reportar Desaparición",
          icon: "pi pi-id-card",
          command: () =>  { location.href = '/NuevaPublicacion' }
        },
        {
          label: "Redactar Articulo",
          icon: "pi pi-fw pi-plus",
          command: () =>  { location.href = '/NuevoArticulo' }
        },
        {
          label: "Mis Posts",
          icon: "pi pi-fw pi-book",
        },
      ],
    },
    {
      label: "Social",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Mis Contactos",
          icon: "pi pi-fw pi-users",
        },
        {
          label: "Agregar contacto",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Eliminar Contacto",
          icon: "pi pi-fw pi-user-minus",
        },
      ],
    },
    {
      label: "Mi Perfil",
      icon: "pi pi-fw pi-heart",
    }
  ];

  <Menubar model={items} />;
  const start = (
    <img alt="logo" src="/images/icon.png" height="50" className="mr-2"></img>
  );

  const end = <a href="/login"> <Button id="logoutBtn" label="Ingresar" icon="pi pi-key" className="mr-2 p-button-rounded"/> </a>

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} className="menubar"/>
      </div>
      
    </div>
  );
};
export default HeaderComponent;
