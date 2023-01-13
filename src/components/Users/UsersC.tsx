import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/profile-user.png";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";

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

export class Users extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            debugger
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    /*componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }*/

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: (string|number|JSX.Element)[] = [];

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
                    pages = [i,...pages]
                }
                pages = [1,2,'...',...pages]
            }
        }

        pages = pages.map((el,index) => el === '...'?<span className={s.dotItem+' '+ s.item}> ... </span>:
            <span onClick={()=>this.onPageChanged(+el)} className={(this.props.currentPage === (+el) ? s.selectedPage:'')+' '+ s.item} key={index}>{el} </span>)
        // pages = [...new Array(pagesCount)].map((el,index)=><span onClick={()=>this.onPageChanged(index+1)} className={this.props.currentPage === (index+1) ? s.selectedPage:''} key={index}>{index+1}</span>)

        return (
            <>
                <div className={s.pagination}>
                    {pages}
                </div>
                {/*<button onClick={this.getUsers}>get users</button>*/}
                <div className={s.usersContainer}>
                    {this.props.users.map(u => {
                        return (
                            <div key={u.id} className={s.card}>
                        <span>
                            <div>
                                <img alt="ava" src={u.photos.small ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button className={s.button + ' ' + s.unfollow}
                                                      onClick={() => this.props.unfollow(u.id)}>UNFOLLOW</button> :
                                    <button className={s.button}
                                            onClick={() => this.props.follow(u.id)}>FOLLOW</button>}
                                {/*<button>Follow</button>*/}
                            </div>
                        </span>
                                <span>
                            <span>
                                <div>{u.name}</div><div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    };
};