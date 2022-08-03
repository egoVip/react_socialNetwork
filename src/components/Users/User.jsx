import React from "react";
import { NavLink } from "react-router-dom";
import UserPhoto from '../../assets/img/pngwing.com.png';
import style from './Users.module.css';

let User = ({ user, followingInProgress, deleteUsersThunkCreator, postUsersThunkCreator, ...props }) => {

    return (
        <div className={style.userItem}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : UserPhoto} className={style.userPhoto} />
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                            deleteUsersThunkCreator(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                            postUsersThunkCreator(user.id);

                        }}> Follow </button>}
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div> */}
                </span>
            </span>
        </div>
    )

}

export default User;