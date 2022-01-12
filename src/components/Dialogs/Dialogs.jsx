import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(phrase => <Message message={phrase.message} key={phrase.id+=1} id={phrase.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;