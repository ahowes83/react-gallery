import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
  const [hook, testHook] = useState(null);
  return(
    <div>
        <h2>Gallery List</h2>
       <div> {props.itemArray.map(item =>(<GalleryItem item={item}/>))}</div>
    </div>
  )
}

export default GalleryList;