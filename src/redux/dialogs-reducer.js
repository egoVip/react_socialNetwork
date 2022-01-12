const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }],

            };

        default: return state;
    }
}

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export default dialogsReducer;