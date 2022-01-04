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
        },
        sideBar: {
            friends: [
                { id: 1, nameFriend: 'Viktor' },
                { id: 2, nameFriend: 'Dima' },
                { id: 3, nameFriend: 'Lena' },
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state chenged')
    },
    addPost(){
        let newPost = {
            id: 5,
            messageLike: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },    
    subscribe(observer){
        this._callSubscriber = observer;
    },
}

 

window.store = store;
export default store;