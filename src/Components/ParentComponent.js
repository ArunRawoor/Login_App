import React from 'react';
import ChildComponent from './ChildComponent';


const ParentComponent = () => {
    return(
        <div>
            <h2>Hii This is in the Parent Component </h2>

            <ChildComponent  name='Asdf' age={26} Pno={1234567689} Country='India' state="ASDHJ" />
        </div>
    );
};

export default ParentComponent;