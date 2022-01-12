import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { toggleAC, setUsersAC } from './../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch (toggleAC(userId));
        },
        setUsers: (users) => {
            dispatch (setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users);