
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

    
    const productTemplate1 = (article: any) => {
        return (

                <div className="product-item">
                <div className="product-item-content">
                    <CardComponent
                    id={article.id}
                    title={article.title}
                    subtitle={article.subtitle}
                    body={article.body}
                    imgsrc={article.img}
                  ></CardComponent>
                </div>
            </div>
        );
    }

    return (
    <>
    <div className="carousel-demo mt-8">
        <Carousel value={posts} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate1} />
    </div>
    </>
    );
}

export const getServerSideProps = async (ctx: any) => {
  const posts = await require("./api/data.json")
  return {
    props: {
      posts: posts,
    },
  };
};


    
export default sandbox;