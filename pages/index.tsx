import CardComponent from "../components/Card";
import HeaderComponent from "../components/Header";
import styles from "../styles/Home.module.css";
import React from "react";

const Home = () => {
  const data = require("./api/data.json");
  const missing = require("./api/missing.json")
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="container">
        <h1>Artículos</h1>
      </div>
      <div className={styles.container}>
        <div className="grid my-3">
          {data.map((data?: any) => (
            <div className="col" key={data.id}>
              <CardComponent
                id={data.id}
                title={data.title}
                subtitle={data.subtitle}
                body={data.body}
                imgsrc={data.img}
              ></CardComponent>
            </div>
          ))}
        </div>
      </div>
      <div className={"container"}>
        <h1>Ayudanos a Encontrarlas</h1>
      </div>
      <div className={styles.container}>
        <div className="grid my-3">
          {missing.map((missing?: any) => (
            <div className="col" key={missing.id}>
              <CardComponent
                id={missing.id}
                title={missing.title}
                subtitle={missing.subtitle}
                body={missing.body}
                imgsrc={missing.img}
              ></CardComponent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;