import { FaSave, FaImages, FaTimes } from "react-icons/fa";
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { startSaveNote, startUploading } from '../../actions/notes'
import { noAction } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
    
    const noteDate = moment();
    

    const handleSaveNote = () => {        
        dispatch( startSaveNote(active) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    const handleNoAction = () => {
        dispatch(noAction());
    }

    return (
        <div className='notes__appbar'>
            <div className='date'>
                <span>{ noteDate.format('LL') }</span>
            </div>        
            <div className='actions'>
                <input 
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={ handleFileChange }
                />


                <div className="button" onClick={ handlePictureClick }>
                    <button className='btn'>Picture</button>
                    <FaImages />
                </div>

                <div className="button" onClick={ handleSaveNote }> 
                    <button className='btn'>Save</button>
                    <FaSave />
                </div>

                <div className="button" onClick={ handleNoAction }> 
                    <button className='btn'>Unselect</button>
                    <FaTimes />
                </div>
                                
            </div>            
        </div>
    )
}

