import {useState} from 'react';

function addPic(props){
  const [hook, testHook] = useState(null);
  return(
    <div>
        <h2>Add a Picture!</h2>
        <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default _template;