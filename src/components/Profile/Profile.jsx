import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostscontainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
      <MyPostscontainer />
    </div>
  )
}

export default Profile