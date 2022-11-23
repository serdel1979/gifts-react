import React from 'react'
import { getGifs } from '../helpers/getGif';

export const GiftGrid = ({ category }) => {

   const gift = getGifs('valorant');


   return (
    <>
       <h3> { category } </h3>

    </>
  )
}
