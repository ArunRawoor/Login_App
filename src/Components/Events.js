import React from 'react';

function Events() {

    function handleclick()
    {
        alert('OnClick Event got exicuted!')
    }
    return(
        <h2 onClick={handleclick}> click me the Onclick event will got exicuted </h2>
    )
}

export default Events;