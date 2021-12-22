import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;
    const activeId = useRef( note.id );

    const dispatch = useDispatch();

    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleteNote(id));
    }
    
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content animate__animated animate__fadeIn'>
                <input type="text" placeholder='Some awesome title!' className='notes__title-input' name='title' value={ title } onChange={ handleInputChange }/>

                <textarea placeholder='What happened today?' className='notes__textarea' name='body' value={body} onChange={ handleInputChange }></textarea>

                <div className='notes__image'>

                    {
                        note.url &&
                        (
                            <img src={note.url} alt="album cover of amnesiac" />
                        )
                    }
                    
                </div>
            </div>
            <button className='btn btn-danger' onClick={ handleDelete }>Delete</button>
        </div>
    )
}
