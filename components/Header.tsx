import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

const HeaderComponent = () => {
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Post",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Nuevo Post",
          icon: "pi pi-fw pi-plus",
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
    },
    {
      label: "Salir",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  <Menubar model={items} />;
  const start = (
    <img alt="logo" src="/images/icon.png" height="40" className="mr-2"></img>
  );
  const end = <InputText placeholder="Buscar" type="text" />;

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};
export default HeaderComponent;
