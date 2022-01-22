import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import UserPhoto from '../../assets/img/user.png'

class Users extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.props.setUsers(response.data.items);
			});
		}
	}

	render() {
		return <div>
			{
				this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : UserPhoto} className={style.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { this.props.toggleFollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.toggleFollow(u.id) }}>Follow</button>}
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
	}
}


export default Users;

// if (props.users.length === 0) {



// 	props.setUsers([
// 		{
// 			id: 1, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
// 			followed: true, fullName: 'Dima', status: 'Boss', location: { city: 'Minsk', country: 'Belarus' }
// 		},
// 		{
// 			id: 2, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
// 			followed: true, fullName: 'Lena', status: 'Boss', location: { city: 'Moscow', country: 'Russia' }
// 		},
// 		{
// 			id: 3, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
// 			followed: false, fullName: 'Stepa', status: 'Boss', location: { city: 'Kiev', country: 'Ukrain' }
// 		},
// 		{
// 			id: 4, photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
// 			followed: false, fullName: 'Vova', status: 'Boss', location: { city: 'Berlin', country: 'Germany' }
// 		},
// 	]
// 	)
// }