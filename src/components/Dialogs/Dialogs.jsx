import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let newMessage = React.createRef();

let addMessage = ()=>{
    let text = newMessage.current.value;
    alert(text)
}

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messages.map(phrase => <Message message={phrase.message} id={phrase.id} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessage}></textarea><br />
            <button onClick={addMessage}>Send message</button>
        </div>
    )
}

export default Dialogs;