import React from 'react';
import './Aside.css'
import LeftAside from '../LeftAside/LeftAside';
import RightAside from '../RightAside/RightAside';
import Main from '../Main/Main';


function Aside() {
    return (
        <div className=' main '>
            <LeftAside/>
            <Main/>
            <RightAside/>
        </div>
    )
}

export default Aside