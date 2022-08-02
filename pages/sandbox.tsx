
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import CardComponent from '../components/Card';

const sandbox = ({ posts }: any) => {


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    
    const productTemplate = (article: any) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <CardComponent
                    id={article.id}
                    title={article.titulo}
                    subtitle={article.usuario}
                    body={article.descripcion}
                    imgsrc={article.img}
                  ></CardComponent>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            
                <Carousel value={posts} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} />
            
        </div>
    );
}

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch("http://localhost:8080/api/publicaciones");
  const posts = await res.json();
  return {
    props: {
      posts: posts.contenido,
    },
  };
};
    
export default sandbox;