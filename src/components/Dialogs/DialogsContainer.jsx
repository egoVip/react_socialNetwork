import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body))},
        sendMessage:()=>{dispatch(sendMessageCreator())},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;