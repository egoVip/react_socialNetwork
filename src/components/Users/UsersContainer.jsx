import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { toggleFollow, setCurrentPage, togglefollowingInProgress, getUsersThunkCreator, postUsersThunkCreator, deleteUsersThunkCreator } from './../../redux/users-reducer';
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {



    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //     this.props.toggleIsFetching(true);

        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //         .then((data) => {
        //             this.props.toggleIsFetching(false);
        //             this.props.setUsers(data.items);
        //             this.props.setTotalUsersCount(data.totalCount);
        //         })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber , this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     })
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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }


export default connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    togglefollowingInProgress,
    getUsers: getUsersThunkCreator,
    postUsersThunkCreator,
    deleteUsersThunkCreator
})(UsersContainer);
