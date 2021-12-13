import React from 'react'
import { Link } from "react-router-dom";
import { Sidebar } from './Sidebar';

export const Journal = () => {
    return (
        <div className='journal__main-content'>

            <Sidebar />

            <main>
                <h1> HERE IS THE MAIN CONTENT</h1>
            </main>
            {/* <h1>Jorunal App</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link exact to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </div>
    )
}
