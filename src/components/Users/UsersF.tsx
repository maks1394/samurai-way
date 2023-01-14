// @flow
import * as React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/profile-user.png";

type Props = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pagesCount:number
    onPageChanged:(n:number)=>void
    pages:(string|number)[]
};
export const UsersF = (props: Props) => {
    let pages:JSX.Element[] = []
    if (props.pagesCount>11){
        pages = props.pages.map((el,index) => el === '...'?<span key={index} className={s.dotItem+' '+ s.item}> ... </span>:
            <span onClick={()=>props.onPageChanged(+el)} className={(props.currentPage === (+el) ? s.selectedPage:'')+' '+ s.item} key={index}>{el} </span>)
    } else {
        pages = [...new Array(props.pagesCount)].map((el,index)=><span onClick={()=>props.onPageChanged(index+1)} className={(props.currentPage === (index+1) ? s.selectedPage:'')+' '+ s.item} key={index}>{index+1}</span>)
    }
    return (
        <>
            <div className={props.pagesCount>11? s.pagination :s.paginationWithSmallNumber}>
                {pages}
            </div>
            <div className={s.usersContainer}>
                {props.users.map(u => {
                    return (
                        <div key={u.id} className={s.card}>
                        <span>
                            <div>
                                <img alt="ava" src={u.photos.small ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button className={s.button + ' ' + s.unfollow}
                                                      onClick={() => props.unfollow(u.id)}>UNFOLLOW</button> :
                                    <button className={s.button}
                                            onClick={() => props.follow(u.id)}>FOLLOW</button>}
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