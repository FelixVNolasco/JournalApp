
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/" component={Journal} />
                    <Route path="/auth" component={AuthRouter} />
                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
