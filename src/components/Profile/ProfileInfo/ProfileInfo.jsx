import React from "react";

import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://fullhdoboi.ru/wp-content/uploads/_ph/29/174943414.jpg" alt="" />
      </div>
      <div className={style.descriptionBlock}>
        ava
        description
      </div>
    </div>
  )
}

export default ProfileInfo