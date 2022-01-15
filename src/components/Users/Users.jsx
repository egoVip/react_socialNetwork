import React from "react";
import style from './Users.module.css'

const Users = (props) => {
    // if (props.users.length ===0){
    // props.setUsers(
    //     users:[
    //         {
    //             id: 1, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
    //             followed: true, fullName: 'Dima', status: 'Boss', location: { city: 'Minsk', country: 'Belarus' }
    //         },
    //         {
    //             id: 2, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
    //             followed: true, fullName: 'Lena', status: 'Boss', location: { city: 'Moscow', country: 'Russia' }
    //         },
    //         {
    //             id: 3, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
    //             followed: false, fullName: 'Stepa', status: 'Boss', location: { city: 'Kiev', country: 'Ukrain' }
    //         },
    //         {
    //             id: 4, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
    //             followed: false, fullName: 'Vova', status: 'Boss', location: { city: 'Berlin', country: 'Germany' }
    //         },
    //     ]
    // )}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.toggleFollow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.toggleFollow(u.id) }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }

    </div>

}

export default Users;