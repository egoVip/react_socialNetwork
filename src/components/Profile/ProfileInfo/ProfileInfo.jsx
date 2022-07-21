import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from '../../../assets/img/user.png';


const ProfileInfo = (props) => {
  // debugger
  if (!props.profile) {
    return <Preloader />
  }

  const onMainphotoSelected =(e)=>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  return  (
    <div>
     
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large || UserPhoto} alt=""/>
        
<br />
        { props.isOwner && <input type={'file'} onChange={onMainphotoSelected}/>}
        <div>Name: {props.profile.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div>id: {props.profile.userId}</div>
        {/* <div>facebook: {props.profile.contacts.facebook}</div>
        <div>website: {props.profile.contacts.website}</div>
        <div>vk: {props.profile.contacts.vk}</div>
        <div>twitter: {props.profile.contacts.twitter}</div>
        <div>instagram: {props.profile.contacts.instagram}</div>
        <div>youtube: {props.profile.contacts.youtube}</div>
        <div>lookingForAJob: {props.profile.lookingForAJob}</div>
        <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div> */}
      </div>
    </div>
  )
}

export default ProfileInfo

