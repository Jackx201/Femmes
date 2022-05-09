import React from "react";
import { Card } from "primereact/card";
import ButtonComponent from "./ButtonComponent";
import CardFooterComponent from "./CardFooterComponent";

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
      <CardFooterComponent></CardFooterComponent>
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
        className="card"
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {props.body}
        </p>
      </Card>
    </div>
  );
};
export default CardComponent;
