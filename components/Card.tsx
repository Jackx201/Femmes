import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import ButtonComponent from "./ButtonComponent";

interface CardProps {
  /**
   * Key for the element
   */
  id?: string;
  /**
   * Image Source
   */
  imgsrc?: string;
  /**
   * Header for the card
   */
  title?: string;
  /**
   * Sub Header for the card
   */
  subtitle?: string;
  /**
   * Header for the card
   */
  body?: string;
}

const CardComponent = (props: CardProps) => {
  const header = <img alt="Card" src={props.imgsrc} height="200px" />;
  const footer = (
    <span>
      <ButtonComponent icon="pi pi-heart" className="p-button-rounded p-button-help" label="Favorite"/>
      <ButtonComponent icon="pi pi-comments" className="p-button-rounded p-button-secondary ml-3" label="Favorite"/>
      <ButtonComponent icon="pi pi-share-alt" className="p-button-rounded p-button-info ml-3" label="Favorite"/>
    </span>
  );

  return (
    <div>
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subtitle}
        style={{ width: "21em" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {props.body}
        </p>
      </Card>
    </div>
  );
};
export default CardComponent;
