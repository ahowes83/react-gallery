import {useState, useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
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
        <h2>Body</h2>
        <p>{JSON.stringify(props)}</p>
        < galleryList imageArray = {items} getGallery = {getGallery} />
    </div>
  )
}

export default Body;