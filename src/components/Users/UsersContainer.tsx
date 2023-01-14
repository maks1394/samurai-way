import React from 'react';
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
import axios from "axios";
import {UsersF} from "./UsersF";

type Props = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
};
type State = {};

class UsersC extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: (string|number)[] = [];
        if (pagesCount>11) {
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
                <UsersF
                    pagesCount={pagesCount}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    pages={pages}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}/>
            </>
        );
    };
};

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)