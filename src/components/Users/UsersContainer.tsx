import React from 'react';
import {ActionsPropsType, StatePropsType} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./UsersC";

const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): ActionsPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count:number) =>{
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)