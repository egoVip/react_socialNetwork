import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { toggleFollow, setCurrentPage, togglefollowingInProgress, getUsersThunkCreator, postUsersThunkCreator, deleteUsersThunkCreator } from './../../redux/users-reducer';
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { getTotalUsersCount, getPageSize, getUsersItem, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";

class UsersContainer extends React.Component {



    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
       
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                onPageChanged={this.onPageChanged}
                // togglefollowingInProgress={this.props.togglefollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                postUsersThunkCreator={this.props.postUsersThunkCreator}
                deleteUsersThunkCreator={this.props.deleteUsersThunkCreator}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersItem(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}




export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        toggleFollow,
        setCurrentPage,
        togglefollowingInProgress,
        getUsers: getUsersThunkCreator,
        postUsersThunkCreator,
        deleteUsersThunkCreator
    }),
)(UsersContainer);
