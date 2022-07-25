import React from "react";
import style from './Profile.module.css';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from "redux";
import { useMatch } from "react-router-dom";
import { updateStatus, getStatus, saveProfile } from './../../redux/profile-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { savePhoto } from "../../redux/profile-reducer";
class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}
	render() {
		return (
			<Profile {...this.props}
			
				isOwner={this.props.match.params.userId === '21851'}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				savePhoto = {this.props.savePhoto}
				 />
		)
	}
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //hok

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

// let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent);

export const WithUrlDataContainerComponent = (Component) => {
	let RouterComponent = (props) => {
		const match = useMatch('/profile/:userId');
		return <Component {...props} match={match} />;
	}
	return RouterComponent;
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
	WithUrlDataContainerComponent
)(ProfileContainer);