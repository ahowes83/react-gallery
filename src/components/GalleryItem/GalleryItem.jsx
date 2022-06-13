import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';

function GalleryItem(props){
  const [show, setShow] = useState(null);

  const toggleShow = () =>{  // switch between show and not show state (change later for click to get desc.)
    setShow(!show);
  }
  return(
    <div onClick={toggleShow}>
      {
        show?
        <h2>{props.item.description}</h2>
        :
        <img src="{props.item.url}"/>
      }
    </div>
  )
}

export default GalleryItem;