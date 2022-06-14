import React from 'react';
import {useEffect, useState} from 'react';
import * as ReactDOM from 'react-dom';

const GalleryItem=(props)=>{
  const [show, setShow] = useState(null);

  const toggleShow = () =>{  // switch between show and not show state (change later for click to get desc.)
    setShow(!show);
  }

  return(
    <div onClick={toggleShow}>
      {
        show?
        <img onclick={toggleShow} src="{props.item.path}"/>
        :
        <p onclick={toggleShow}>{props.item.description}</p>
      }
    </div>
  )
}

export default GalleryItem;