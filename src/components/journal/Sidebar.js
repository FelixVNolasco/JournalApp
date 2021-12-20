import React from 'react'
import { useDispatch } from 'react-redux'
import { FaUser, FaCalendar,  FaArrowRight} from "react-icons/fa";
import { JournalEntries } from './JournalEntries';
import { LogoutAction } from '../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(LogoutAction());
    }

    return (
        <aside className='journal__sidebar'>
            <div className="journal__sidebar-navbar">
                <div className='journal__profile'>
                    <FaUser className='profile-icon'/>
                    <span>Felix Vega</span>
                </div>                
                <div className='journal__new-entry'>
                    <FaCalendar className='icon-calendar'/>
                    <p>New Entry</p>
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
