
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { Journal } from '../components/journal/Journal';
import { login } from '../actions/auth';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch } from 'react-redux';
import { setLoadingState } from '../actions/notes';

export const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {        
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) =>{
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(setLoadingState(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking) {
        return (
            <div className="auth__main">
                <Loader
                    type="Puff"
                    color="#38939A"
                    height={320}
                    width={320}
                    timeout={3000}
                />
            </div>
        );
    }

    return (
        <Router>
            <>
                <Switch>
                {
                    IsLoggedIn ?
                    (
                        <>
                            <Route exact path="/" component={Journal} />
                            <Redirect to = "/" />
                        </>                        
                    )
                    : 
                    (
                        <>
                            <Route path="/auth" component={AuthRouter} />
                            <Redirect to="/auth/login" />
                        </>
                    )
                }                
                </Switch>
            </>
        </Router>
    )
}
