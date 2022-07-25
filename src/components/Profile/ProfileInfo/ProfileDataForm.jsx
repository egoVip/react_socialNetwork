import React from "react"
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/formsControl/FormsControls";
// import style from './ProfileInfo.module.css';
import style from './../../common/formsControl/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    {error && <div className={style.formSummaryError}>
                {error}
            </div>}
    <div><button >save</button></div>
    <div><b>Name:</b>  <Field placeholder={'Full name'} name={'fullName'} component={Input} /></div>
    {/* <div><b>ID:</b> {props.profile.userId}</div> */}
    <div><b>LookingForAJob:</b> <Field type={'checkbox'} placeholder={''} name={'lookingForAJob'} component={Input} /></div>
    <div><b>My profissional skills</b> <Field  placeholder={'My profissional skills'} name={'lookingForAJobDescription'} component={Textarea} /></div>
    <div><b>About me:</b><Field  placeholder={'About me'} name={'aboutMe'} component={Textarea} /></div>
    <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
      return <div key ={key} className={style.contact}>
        <b>{key}: <Field placeholder={key} name={'contacts.'+ key} component={Input} /></b>
      </div>;
    })}</div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;