import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { toggleAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from './../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch (toggleAC(userId));
        },
        setUsers: (users) => {
            dispatch (setUsersAC(users));
        },
        setCurrentPage: (pageNumber)=>{
            dispatch (setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch (setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users);