import React, { useState } from "react";
import { CascadeSelect } from "primereact/cascadeselect";

const CascadeComponent = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);

  const countries = [
    {
      nombre: "Durango",
      codigo: "dgo",
      municipios: [
        {nombre_municipio: "Gomez Palacio"},
        {nombre_municipio: "Canatlán"},
        {nombre_municipio: "Canelas"},
        {nombre_municipio: "Coneto de Comonfort"},
        {nombre_municipio: "Cuencamé"},
        {nombre_municipio: "Durango"},
        {nombre_municipio: "General Simón Bolívar"},
        {nombre_municipio: "Guadalupe Victoria"},
        {nombre_municipio: "Guanaceví"},
        {nombre_municipio: "Hidalgo"},
        {nombre_municipio: "Indé"},
        {nombre_municipio: "Lerdo"},
        {nombre_municipio: "Mapimí"},
      ]
    },

    {
      nombre: "Aguascalientes",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Baja California",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Baja California Sur",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Campeche",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Ciudad de México",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Coahuila",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Colima",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Guanajuato",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Guerrero",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },

    {
      nombre: "Hidalgo",
      codigo: "",
      municipios: [
        {nombre_municipio: ""}
      ]
    },
  ]


  return (
    <div>
      <CascadeSelect
       className="mt-2"
        value={selectedCity1}
        options={countries}
        optionLabel={"nombre_municipio"}
        optionGroupLabel={"nombre"}
        optionGroupChildren={["municipios"]}
        style={{ minWidth: "17rem" }}
        placeholder={"Lerdo - Durango"}
        name="desc"
        onChange={(event) => setSelectedCity1(event.value)}
      />
    </div>
  );
};

export default CascadeComponent;
