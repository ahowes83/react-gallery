import React from 'react';
import {useEffect, useState} from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

const GalleryItem=(props)=>{
  const [show, setShow] = useState(null);

  const toggleShow = () =>{  // switch between show and not show state (change later for click to get desc.)
    setShow(!show);
  }

  const likeImage = ()=>{
    axios.put('/gallery/likes').then((response)=>{
      console.log(response.data);
      props.getGallery();
    }).catch((err)=>{
      console.log(err);
      alert('error adding likes');
    });
  }

  return(
    <div onClick={toggleShow}>
      {
        show?
        <p className="description" onClick={toggleShow}>{props.item.description}</p>
        :
        <img onClick={toggleShow} src={props.item.path}/>
      }
      <p>Likes: {props.item.likes}  <button className="likeButton" onClick={likeImage}>❤️</button> </p>
    </div>
  )
}

export default GalleryItem;