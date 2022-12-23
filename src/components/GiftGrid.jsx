import {checkPropTypes} from 'prop-types';
import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import useFetchGift from '../hooks/useFetchGift';
import PropTypes from 'prop-types';
import Gif from './Gif';

const GiftGrid = ({ category }) => {

  const {images, isLoading} = useFetchGift( category );

  
   return (
    <>
       <h4> { category } </h4>
       {
        isLoading && (<h2>Cargando...</h2>)
       }
      
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

GiftGrid.protoTypes = {
  category: PropTypes.string.isRequired,
}

export default GiftGrid;