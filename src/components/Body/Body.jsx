import {useState, useEffect} from 'react';
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body(props){
  const [items, setItems] = useState([]);

  useEffect( ()=>{
    getGallery();
  }, []); //empty array tells it to run only once

  const getGallery = ()=>{
    axios.get('/gallery').then((response)=>{
      setItems(response.data);
    }).catch((err)=>{
      console.log(err);
      alert('error getting gallery');
    });
  }

  return(
    <div>
        < GalleryList images_array = {items} />
    </div>
  )
}

export {getGallery};
export default Body;
