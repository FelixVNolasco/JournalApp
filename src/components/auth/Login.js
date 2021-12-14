import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/login'


export const Login = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange ] = useForm({
        email: '',
        password: 123456
    });

    const {email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(123456, 'Felix'));
    }

    return (
        <div>
            <h4 className="auth__title">Signup</h4>
            <form onSubmit={ handleSubmit }>
                <p className='label'>Email</p>
                <div className='input-container'>
                    <input className="auth__input" type="text" placeholder="example@correo.com" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
                </div>                
                <p className='label'>Password</p>
                <div className='input-container'>
                    <input className="auth__input" type="password" placeholder="" name="password" value={password} onChange={handleInputChange}/>
                    <FaEye className='showHide-icon'/>
                </div>
                
                <div className='btn-container'> 
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </div>                
            </form>
            <div className='optionContainer'>
                <p>Or you can login with:</p>
            </div>
            <div className="auth_social-networks">
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <div className='newAccount-container'>
                    <div className="account_title">You don't have an account?</div>
                    <Link className="create_account" to="/auth/signup">Create a new one here.</Link>
                </div>                
            </div>
        </div>
    )
}
