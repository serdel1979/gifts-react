import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import Gif from './Gif';

export const GiftGrid = ({ category }) => {

  
   const [images, setImages] = useState([]);


   const getImages=async()=>{
      const newImages = await getGifs(category);
      setImages(newImages);
  }

   useEffect(()=>{
      getImages();
   },[])
   
  
   return (
    <>
       <h4> { category } </h4>
       <div className="card-grid">
        {
          images.map(({id, title, url})=>{
            return <Gif className="card" key={id} title={title} url={url} />
          })
        }
       </div>
    </>
  )
}
