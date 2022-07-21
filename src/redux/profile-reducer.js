import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES'

let initialState = {
    posts: [
        { id: 1, messageLike: 'Hi, how are you?', likesCount: 12 },
        { id: 2, messageLike: 'It is my first post', likesCount: 11 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messageLike: action.newPost,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
            

        }
        case SAVE_PHOTO_SUCCES: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
            

        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });       //сокращенный синтаксиси return {type: ADD_POST}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSucces = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos });

export const getUserProfile = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getProfiles(userId);
        dispatch(setUserProfile(response.data));
    };

export const getStatus = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    };

export const updateStatus = (status) =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };

export const savePhoto = (file) =>
    async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch((savePhotoSucces(response.data.data.photos)));
        }
    };



export default profileReducer;