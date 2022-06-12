import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
  const [hook, testHook] = useState(null);
  return(
    <div>
        <h2>Gallery List</h2>
        <p>{JSON.stringify(props)}</p>
        {props.itemArray.map(item =>(<GalleryItem item={item}/>))}
    </div>
  )
}

export default GalleryList;