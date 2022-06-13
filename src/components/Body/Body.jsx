import {useState, useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body(props){
  const [hook, testHook] = useState([]);

  useEffect( ()=>{
    getItems();
  }, []); //empty array tells it to run only once

  const getItems = ()=>{
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
        <p>Beans!</p>
        <p>{JSON.stringify(props)}</p>
        <galleryList itemArray = {items}/>
    </div>
  )
}

export default Body;