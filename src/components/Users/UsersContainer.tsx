import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {UsersF} from "./UsersF";
import {Loader} from "../Loader/Loader";

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
    isFetching: boolean
    setIsFetching: (isFetching:boolean)=>void
};
type State = {};

class UsersC extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
        })
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
                {/*<button onClick={()=>this.props.setIsFetching(false)}>false</button>
                <button onClick={()=>this.props.setIsFetching(true)}>true</button>*/}
                {this.props.isFetching ? <Loader/> :
                    <UsersF
                    pagesCount={pagesCount}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    pages={pages}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}

            </>
        );
    };
};

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setIsFetching: (isFetching:boolean)=>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)