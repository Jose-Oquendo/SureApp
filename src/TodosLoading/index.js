import React from 'react';
import './loading.css';

function TodosLoading(){
    return (
        <div className='list-load'>
            <div>
                <span className='cheack-load'></span>
            </div>
            <div>
                <span className='delete-load'></span>
            </div>
        </div>
    );   
}

export { TodosLoading }