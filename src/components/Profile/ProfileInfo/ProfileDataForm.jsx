import React from "react"

const ProfileDataForm = ({ profile }) => {
    return <form>
   <div><button onClick={goToEditMode}>save</button></div>
    <div><b>Name:</b> {profile.fullName}</div>
    {/* <div><b>ID:</b> {props.profile.userId}</div> */}
    <div><b>LookingForAJob:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
    {profile.lookingForAJob && <div><b>My profissional skills</b> {profile.lookingForAJobDescription}</div>}
    <div><b>About me:</b> {profile.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
    })}</div>
  </form>
}


export default ProfileDataForm;