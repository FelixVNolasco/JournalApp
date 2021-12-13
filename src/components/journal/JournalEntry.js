import React from 'react'
import { FaCalendar } from "react-icons/fa";

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>

            <div className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.redd.it/4ypba5tczyh51.jpg)'
                }}
            >
            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    This is a title
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, molestias.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <FaCalendar className='calendar-icon' />
                <span>Monday</span>
                <h4>28</h4>                
            </div>           
        </div>
    )
}
