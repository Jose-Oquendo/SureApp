import React from 'react';
import ReactDOM from 'react-dom';
import './modalStyles.css';
// import ReactDOM from 'react-dom/client';
// import { createPortal } from 'react-dom';

function Modal({children}){
    return ReactDOM.createPortal(
        <div className='Modal'>
            <div className='Modal-body'>  
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }