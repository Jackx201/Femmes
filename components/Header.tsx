import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

const HeaderComponent = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Post",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "New Post",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "My Posts",
          icon: "pi pi-fw pi-book",
        },
      ],
    },
    {
      label: "Friends",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "My Friends",
          icon: "pi pi-fw pi-users",
        },
        {
          label: "New Friend",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Remove Friend",
          icon: "pi pi-fw pi-user-minus",
        },
      ],
    },
    {
      label: "My Profile",
      icon: "pi pi-fw pi-heart",
    },
    {
      label: "Log Out",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  <Menubar model={items} />;
  const start = (
    <img alt="logo" src="/images/icon.png" height="40" className="mr-2"></img>
  );
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};
export default HeaderComponent;
