import React, { useEffect } from "react";
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
  const [renderRoutes, setRenderRoutes] = React.useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      new Promise((resolve)=>{
        console.log("routes added");
        setRenderRoutes(true);
        resolve(true);
      })
    }, 5000);
  })
  const generateRoute=()=>{
    return(
      <>
        <PrivateRoute path="/users0">
          <UserListContainer />
        </PrivateRoute>
        <PrivateRoute path="/users1">
          <UserListContainer />
        </PrivateRoute>
        <PrivateRoute path="/users2">
          <UserListContainer />
        </PrivateRoute>
        <PrivateRoute path="/users3">
          <UserListContainer />
        </PrivateRoute>
        <PrivateRoute path="/users4">
          <UserListContainer />
        </PrivateRoute>
      </>
    );
  }

  console.log(!!Cookies.get('token'));
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <AppHeader>
            <Redirect form="/" to="/users"/>
            <PrivateRoute path="/users">
              <UserListContainer />
            </PrivateRoute>
            {renderRoutes && generateRoute()}
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