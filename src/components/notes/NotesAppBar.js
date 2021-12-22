import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSaveNote = () => {        
        dispatch( startSaveNote(active) );
    }

    return (
        <div className='notes__appbar'>
            <span>20/June/2020</span>
            
                <button className='btn'>Picture</button>
                <button className='btn' onClick={ handleSaveNote }>Save</button>
            
        </div>
    )
}
