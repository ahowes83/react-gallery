import {useState} from 'react';

function GalleryItem(props){
  const [show, setShow] = useState(null);

  const toggleShow = () =>{  // switch between show and not show state (change later for click to get desc.)
    setShow(!show);
  }
  return(
    <div onClick={toggleShow}>
        <h2>Picture in Gallery</h2>
        <p>Beans!</p>
        <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default GalleryItem;