import React from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { FaUser, FaCalendar,  FaArrowRight} from "react-icons/fa";
import { JournalEntries } from './JournalEntries';
import { LogoutAction } from '../../actions/auth';
import { createNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogOut = () => {
        dispatch(LogoutAction());
    }

    const handleNewEntry = () => {
        dispatch(createNewNote());
    }

    return (
        <aside className='journal__sidebar'>
            <div className="journal__sidebar-navbar">
                <div className='journal__profile'>
                    <FaUser className='profile-icon'/>
                    <span>{name}</span>
                </div>
                <div className='journal__new-entry' onClick={handleNewEntry}>
                    <FaCalendar className='icon-calendar'/>
                    <p>Create a new Note</p>
                </div>
                
            </div>


            <JournalEntries />

            <div className='close-container'>                    
                    <button className='btn' onClick={handleLogOut}>Logout</button>
                    <FaArrowRight className='close-icon'/>
                </div>
        </aside>
    )
}
