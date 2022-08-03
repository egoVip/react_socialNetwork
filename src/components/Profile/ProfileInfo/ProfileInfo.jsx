import React, { useState } from "react";
import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from '../../../assets/img/user.png';
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainphotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )

  }

  const Contact = ({ contactTitle, contactValue }) => {
    return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
  }

  const ProfileData = ({ profile, isOwner, goToEditMode }) => <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div><b>Name:</b> {profile.fullName}</div>
    {/* <div><b>ID:</b> {props.profile.userId}</div> */}
    <div><b>LookingForAJob:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
    {profile.lookingForAJob && <div><b>My profissional skills</b> {profile.lookingForAJobDescription}</div>}
    <div><b>About me:</b> {profile.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
    })}</div>
  </div>


  return (
    <div>

      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large || UserPhoto} alt="" />

        <br />
        {props.isOwner && <input className={style.inputBlock} type={'file'} onChange={onMainphotoSelected} />}
        <br />
        <br />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} profile={props.profile} />}

      </div>
    </div>
  )
}

export default ProfileInfo

