import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const GalleryItem=(props)=>{
  const [show, setShow] = useState(false);

  const toggleShow = () =>{  // switch between show and not show state
    setShow(!show);
  }

  const likeImage = ()=>{
    let toBeLiked = props.item.id;

    axios.put('/gallery/like/'+ toBeLiked).then((response)=>{
      console.log(response.data);
      props.getGallery();
    }).catch((err)=>{
      console.log(err);
      alert('error adding likes');
    });
  }

  return(
    <div>
      <div onClick={toggleShow}>
        {
          show?
          <p className="description" onClick={toggleShow}>{props.item.description}</p>
          :
          <img onClick={toggleShow} src={props.item.path} alt={props.item.description}/>
        }
      </div>
      <div>
        <p>Likes: {props.item.likes}  <button className="likeButton" onClick={likeImage}>
        <span role="img" alt="heart">❤️</span></button> </p>
      </div>
    </div>
  )
}

export default GalleryItem;