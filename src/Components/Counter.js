 import React, { useState } from 'react';

 const Counter = () => {
 const [count , setCount] = useState(0) ; 


 

 return(
    <>
    <p>Count: {count}</p>

    <button onClick={() => setCount(count + 1)}>Increment</button>
    &nbsp; &nbsp; &nbsp;

    <button onClick={() => setCount(count - 1)}>Decrement</button>


    </>
 )}
 
 export default Counter;