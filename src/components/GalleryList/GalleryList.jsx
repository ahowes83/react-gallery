import {useEffect, useState} from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryList = (props)=>{
  const [hook, testHook] = useState(null);
  return(
    <div>
        {props.images_array.map( item =>(<GalleryItem item = {item}/>))}
    </div>
  )
}

export default GalleryList;