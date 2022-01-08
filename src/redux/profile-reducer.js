const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, messageLike: 'Hi, how are you?', likesCount: 12 },
        { id: 2, messageLike: 'It is my first post', likesCount: 11 },
    ],
    newPostText: 'it-it-it'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messageLike: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });       //сокращенный синтаксиси return {type: ADD_POST}
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;