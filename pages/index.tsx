import CardComponent from "../components/Card";
import HeaderComponent from "../components/Header";
import styles from "../styles/Home.module.css";
import React from "react";
import { useRouter } from "next/router";

const Home = ({ posts }: any) => {
  const router = useRouter();

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
          {posts.map((post?: any) => (
            <div className="col" key={post.id}>
              <CardComponent
                id={post.id}
                title={post.titulo}
                subtitle={post.usuario}
                body={post.descripcion}
                imgsrc={post.img}
              ></CardComponent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch("http://localhost:8080/api/publicaciones");
  const posts = await res.json();
  return {
    props: {
      posts: posts.contenido,
    },
  };
};

export default Home;