import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

export const Signup = () => {
    return (
        <div>
            <h4 className="auth__title">Sign In</h4>
            <form>
                <p className='label'>Name</p>
                <div className='input-container'>
                    <input className="auth__input" type="text" placeholder="Felix Vega" name="name" autoComplete="off"/>
                </div>
                <p className='label'>Email</p>
                <div className='input-container'>
                    <input className="auth__input" type="text" placeholder="example@correo.com" name="email" autoComplete="off"/>
                </div>
                <p className='label'>Password</p>
                <div className='input-container'>
                    <input className="auth__input" type="password" placeholder="" name="password" />
                    <FaEye className='showHide-icon'/>
                </div>                
                <p className='label'>Confirm your password</p>
                <div className='input-container'>
                    <input className="auth__input" type="password" placeholder="" name="password2" />
                </div>                
                <div className='btn-container'> 
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>                
            </form>
            <div className='newAccount-container'>
                <div className="account_title">You already have an account?</div>
                <Link className="create_account" to="/auth/login">Log in here.</Link>
            </div>                
            
        </div>
    )
}
