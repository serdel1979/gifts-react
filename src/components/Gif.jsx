import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({title, url}) => {
  return (
    <>
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    </>
  )
}

Gif.protoTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default Gif
