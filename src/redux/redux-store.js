import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;