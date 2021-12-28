import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export const JournalRouter = () => {
    return ( 
        <Switch>
            {/* <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
            <Redirect to="/auth/login" /> */}
        </Switch>
    )
}