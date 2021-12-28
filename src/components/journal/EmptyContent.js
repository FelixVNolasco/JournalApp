import React from 'react'
import { FaPen } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { createNewNote } from '../../actions/notes';

export const EmptyContent = () => {

    const dispatch = useDispatch();

    const handleNewEntry = () => {
        dispatch(createNewNote());
    }
    return (
        <div className='nothing__main-content'>
            <div className='nothing__container'  onClick={handleNewEntry}>
                <FaPen />
            </div>
        </div>
    )
}
