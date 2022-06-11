import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body(props){
  const [hook, testHook] = useState([]);

  useEffect( ()=>{
    getItems();
  }, []); //empty array tells it to run only once

  const getItems = ()=>{
    axios.get('/items').then((response)=>{
      console.log(response.data);
    }).catch((err)=>{
      console.log(err);
      alert('error getting items');
    });
  }

  return(
    <div>
        <h2>Body</h2>
        <p>Beans!</p>
        <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default Body;