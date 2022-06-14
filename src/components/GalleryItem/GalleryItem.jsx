import React from 'react';
import {useState} from 'react';
//import * as ReactDOM from 'react-dom';
import axios from 'axios';

const GalleryItem=(props)=>{
  const [show, setShow] = useState(null);

  const toggleShow = () =>{  // switch between show and not show state (change later for click to get desc.)
    setShow(!show);
  }

  const likeImage = ()=>{
    let toBeLiked = props.item.id;
    axios.put('/gallery/likes'+toBeLiked).then((response)=>{
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
        <img onClick={toggleShow} src={props.item.path} alt={props.item.description}/>
      }
      <p>Likes: {props.item.likes}  <button className="likeButton" onClick={likeImage}>
      <span role="img" alt="heart">❤️</span></button> </p>
    </div>
  )
}

export default GalleryItem;