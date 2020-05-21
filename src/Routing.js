import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import UserListContainer from './components/users/UserListContainer';
import AppHeader from "./components/AppHeader";
import Cookies from 'js-cookie'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <AppHeader>
            <Redirect form="/" to="/users"/>
            <PrivateRoute path="/users">
              <UserListContainer />
            </PrivateRoute>
          </AppHeader>
        </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Cookies.get('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}