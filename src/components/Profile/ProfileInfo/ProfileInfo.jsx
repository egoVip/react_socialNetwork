import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
     
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div>id: {props.profile.userId}</div>
        <div>facebook: {props.profile.contacts.facebook}</div>
        <div>website: {props.profile.contacts.website}</div>
        <div>vk: {props.profile.contacts.vk}</div>
        <div>twitter: {props.profile.contacts.twitter}</div>
        <div>instagram: {props.profile.contacts.instagram}</div>
        <div>youtube: {props.profile.contacts.youtube}</div>
        <div>lookingForAJob: {props.profile.lookingForAJob}</div>
        <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
        <div>fullName: {props.profile.fullName}</div>

        ava
        description
      </div>
    </div>
  )
}

export default ProfileInfo

