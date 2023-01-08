import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/profile-user.png'

export type StatePropsType = {
    users: UserType[]
}
export type ActionsPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
type PropsType = StatePropsType & ActionsPropsType

export const Users = (props: PropsType) => {
    if (!props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{

            props.setUsers(response.data.items)
        })
        /*props.setUsers([{
            id: 1,
            photoUrl: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
                followed: false,
                fullName: 'Pavel',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])*/
    }
    return (
        <div className={s.usersContainer}>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.card}>
                        <span>
                            <div>
                                <img alt="ava" src={u.photos.small? u.photos.small:userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button className={s.button + ' ' + s.unfollow} onClick={() => props.unfollow(u.id)}>UNFOLLOW</button> :
                                    <button className={s.button} onClick={() => props.follow(u.id)}>FOLLOW</button>}
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
    );
};