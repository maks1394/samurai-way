import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    follow,getUsersThunkCreator,
    setCurrentPageAC, setIsFetchingAC,unfollow,
    UserType
} from "../../redux/users-reducer";
import {UsersF} from "./UsersF";
import {Loader} from "../Loader/Loader";
import {compose} from "redux";
import {RedirectHoc} from "../../hoc/RedirectHOC";

type Props = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    isFollowingInProgress: {
        [id: number]: boolean
    }
    getUsers: (currentPage: number, pageSize: number) => void
};
type State = {};


export class UsersC extends React.Component<Props, State> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.getUsers(p, this.props.pageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: (string | number)[] = [];
        if (pagesCount > 11) {
            if (this.props.currentPage > 5 && this.props.currentPage < pagesCount - 4) {
                pages = [1, 2, '...']
                for (let i = this.props.currentPage - 2; i <= this.props.currentPage + 2; i++) {
                    pages = [...pages, i]
                }
                pages = [...pages, '...', pagesCount - 1, pagesCount]
            } else {
                if (this.props.currentPage <= 5) {
                    for (let i = 1; i <= this.props.currentPage + 2; i++) {
                        pages = [...pages, i]
                    }
                    pages = [...pages, '...', pagesCount - 1, pagesCount]
                } else {
                    for (let i = pagesCount; i >= this.props.currentPage - 2; i--) {
                        pages = [i, ...pages]
                    }
                    pages = [1, 2, '...', ...pages]
                }
            }

        }
        return (
            <>
                {this.props.isFetching ? <Loader/> :
                    <UsersF
                        pagesCount={pagesCount}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        pages={pages}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFollowingInProgress={this.props.isFollowingInProgress}
                    />}

            </>
        );
    };
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress
    }
}

let dispatchObject = {
    setCurrentPage: setCurrentPageAC,
    setIsFetching: setIsFetchingAC,
    getUsers: getUsersThunkCreator,
    unfollow,
    follow
}

// export const UsersContainer = connect(mapStateToProps, dispatchObject)(UsersC)

export const UsersContainer = compose<React.ComponentType>(
    RedirectHoc,
    connect(mapStateToProps, dispatchObject)
)(UsersC)