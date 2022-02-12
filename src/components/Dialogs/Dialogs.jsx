import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New message'} name={'newMessageBody'} component={'textarea'} />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(phrase => <Message message={phrase.message} key={phrase.id} id={phrase.id} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;