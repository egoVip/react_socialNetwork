import React from "react";
import { NavLink } from "react-router-dom";
import UserPhoto from '../../assets/img/user.png';
import style from './Users.module.css';
import * as axios from 'axios';
import { usersAPI } from "../../api/api";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };

    return (
        <div>
            <div className={style.pagesNumber}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={style.userPhoto} />
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    
                                    props.togglefollowingInProgress(true, u.id);
                                    usersAPI.deleteUsers(u.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.toggleFollow(u.id)
                                            }
                                            props.togglefollowingInProgress(false, u.id);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                   
                                    props.togglefollowingInProgress(true, u.id);
                                    usersAPI.postUsers(u.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.toggleFollow(u.id)
                                            }
                                            props.togglefollowingInProgress(false, u.id);
                                        });

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
                )
            }

        </div>
    )
}

export default Users;