import {useState} from 'react';

function _template(props){
  const [hook, testHook] = useState(null);
  return(
    <div>
        <h2>_template</h2>
        <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default _template;