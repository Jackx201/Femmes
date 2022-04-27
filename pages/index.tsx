import CardComponent from "../components/Card";
import HeaderComponent from "../components/Header";
import styles from "../styles/Home.module.css";
import React from "react";

const Home = () => {
  const data = require("./api/data.json");
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={styles.container}>
        <div className="grid my-3">
          {data.map((data?: any) => (
            <div className="col">
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
    </>
  );
};

export default Home;
