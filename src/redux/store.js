import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';


let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, messageLike: 'Hi, how are you?', likesCount: 12 },
                { id: 2, messageLike: 'It is my first post', likesCount: 11 },
            ],
            newPostText: 'it-it-it'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Viktor' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Lena' },
                { id: 4, name: 'Stepa' },
                { id: 5, name: 'Sveta' },
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'What is your name?' },
            ],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                { id: 1, nameFriend: 'Viktor' },
                { id: 2, nameFriend: 'Dima' },
                { id: 3, nameFriend: 'Lena' },
            ]
        }
    },
    _callSubscriber() {
        console.log('state chenged')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }
};

window.store = store;
export default store;
