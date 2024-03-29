import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

export const authMeThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.me();

        if (response.data.resultCode === 0) {
            let { userId, email, login } = response.data.data;
            dispatch(setAuthUserData(userId, email, login, true));
        }
    };

export const loginThunkCreator = (email, password, rememberMe, captcha) =>
    async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            dispatch(stopSubmit('login', { _error: message }));
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch) => {

        let response = await securityAPI.getCaptchaUrl()
        const capchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(capchaUrl));
    }

export const logoutThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }

export default authReducer;