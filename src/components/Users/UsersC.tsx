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
};
type State = {};

export class Users extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
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