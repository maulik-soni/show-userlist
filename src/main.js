import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import loggedInUser from './store/loggedInUserStore';

const middlewares = [thunk];

const store = createStore(
	combineReducers({
    loggedInUser
  }),
	compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store;