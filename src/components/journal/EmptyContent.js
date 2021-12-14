import React from 'react'
import { FaPen } from "react-icons/fa";

export const EmptyContent = () => {
    return (
        <div className='nothing__main-content'>
            <div className='nothing__container'>
                <p>Please, Select an action <br />                
                   or Create a new one!
                </p>
                <FaPen />
            </div>
        </div>
    )
}
