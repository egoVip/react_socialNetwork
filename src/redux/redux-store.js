import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducer);

window.store = store;

export default store;