
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking) {
        return (
            <h5>Espere un momento...</h5>
        )        
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
