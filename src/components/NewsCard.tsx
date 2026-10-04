import Image from 'next/image';
import React from 'react';
interface articalDatas {
    id : string
    title : string
    description : string
    imageUrl : string
    imageAlt : string
}
const NewsCard = ({articalData}:{articalData:articalDatas}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
     <Image
            src={articalData.imageUrl}
            alt={articalData.title}
            height={600}
            width={600}
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{articalData.title}</h2>
    <p>{articalData.description}</p>
   
  </div>
</div>
    );
};

export default NewsCard;