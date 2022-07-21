import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
 ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const authMeThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.me();

        if (response.data.resultCode === 0) {
            let { userId, email, login } = response.data.data;
            dispatch(setAuthUserData(userId, email, login, true));
        }
    };

export const loginThunkCreator = (email, password, rememberMe) =>
    async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            dispatch(stopSubmit('login', { _error: message }));
        }
    }

export const logoutThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }

export default authReducer;