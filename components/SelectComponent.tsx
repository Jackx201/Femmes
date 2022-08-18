import React, { useState } from "react";
import { CascadeSelect } from "primereact/cascadeselect";

const CascadeComponent = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);

  const countries = [
    {
      nombre: "Durango",
      codigo: "dgo",
      municipios: [
        {nombre_municipio: "Gomez Palacio"}
      ]
    }
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
        name="estado"
        onChange={(event) => setSelectedCity1(event.value)}
      />
    </div>
  );
};

export default CascadeComponent;
