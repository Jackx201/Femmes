import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const CardComponent = () => {
  const header = (
    <img
      alt="Card"
      src="http://www.basic-concept.com/public/images/uploads/feminism.png"
    />
  );
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
      />
    </span>
  );

  return (
    <div>
      <Card
        title="Advanced Card"
        subTitle="Subtitle"
        style={{ width: "21em" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
};
export default CardComponent;
