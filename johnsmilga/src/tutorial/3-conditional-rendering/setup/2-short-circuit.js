import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter")
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world'; // if text is false it will return the other route
  // const secondValue = text && 'hello world'; // if text is true it will return the other route

  return (
  <>
  {/* <h1>{firstValue}</h1>
  <h1>Value: {secondValue}</h1> */}
  <h1>{text || "John Doe"}</h1>
  <button className='btn' onClick={() => setIsError(!isError)} >Toggle error</button>
  {isError && <h1>Error...</h1>}
  {isError ? (
    <p>There is an error...</p>
    ) : (
    <div>
      <h2>There is no error</h2>
    </div>
    )}
  </>

  )
};

export default ShortCircuit;
