import React, { Fragment } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Profile from './componets';
const RouterMain = () => {
    return (
        <Switch>
                <Route path="/:id" component={Profile} />
                <Redirect from="/" to="/1" />
        </Switch>
    );
}
export default RouterMain;