const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


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

<<<<<<< HEAD

=======
    
>>>>>>> master
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                messageLike: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
<<<<<<< HEAD
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
=======
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
>>>>>>> master
        }

    }

};

<<<<<<< HEAD
export const addPostActionCreator = () => ({ type: ADD_POST });       //сокращенный синтаксиси return {type: ADD_POST}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
=======
export const addPostActionCreator = () => ({type: ADD_POST});       //сокращенный синтаксиси return {type: ADD_POST}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


>>>>>>> master

window.store = store;
export default store;