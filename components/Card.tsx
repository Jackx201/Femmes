import React from "react";
import { Card } from "primereact/card";
import CardFooterComponent from "./CardFooterComponent";
import Link from 'next/link'

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

  function redirect(){

  }

  return (
    <div>
      <Link href={`/posts/${props.id}`} >
      <Card 
        id={props.id}
        title={props.title}
        subTitle={props.subtitle}
        style={{ width: "21em", cursor: 'pointer' }}
        footer={footer}
        header={header}
        className="card"
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {props.body?.substring(0, 255)} <a href="#">... Ver más</a>
        </p>
      </Card>
      </Link>
    </div>
  );
};
export default CardComponent;
