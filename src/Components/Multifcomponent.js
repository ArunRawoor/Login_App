
import React from 'react';
function Multifcomponent()
{

function greeting()
{
   alert("Message From Greeting() Function!")
}
  
function waveHello() 
{
 alert("Message From waveHello() Function!")
} 
  
  
  return (
<div>
<button
onClick={() => {
  greeting();
  waveHello();
  }}>
I'm abutton
</button>
</div>
);
}

export default Multifcomponent;