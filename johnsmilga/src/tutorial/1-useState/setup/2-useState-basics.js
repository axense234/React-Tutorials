import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler)
  const [banana, setBanana] = useState('random title')
  const handleClick = () =>{
    if(banana === 'random title'){
      setBanana("Hello world");
    } else {
      setBanana("random title");
    }
  };
  return (  
    <React.Fragment>
      <h2>{banana}</h2>
      <button className="btn" onClick ={handleClick}>Change title</button>
    </React.Fragment> 
    );
};

export default UseStateBasics;
