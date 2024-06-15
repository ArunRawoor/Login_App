import React from 'react'

function Contact() {

  function jfun1()
    {
        alert("Event Fired!")
    }



  return (
    <h1 onClick={jfun1}> Using Event with React!!! Made In India </h1>

  )
}

export default Contact