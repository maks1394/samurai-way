import React from 'react';
import s from './Header.module.css'
import {IoShareSocialOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/auth-reducer";
import defaultPhoto from '../../assets/images/profile-user.png'

type PropsType = {
    user: AuthStateType;
}


export const Header = ({user}: PropsType) => {
    return (
        <header className={`${s.header} bg_white shadow_xs border_0`}>
            <div className={s.header_top}>
                <a>
                    <IoShareSocialOutline className={s.icon}/>
                    <span
                        className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Social </span>
                </a>
            </div>
            <div className={s.authContainer}>
                {user.isAuth ?
                    <>
                        <div className={s.loginBlock}>
                            <span>{`${user.login}`}</span><span>{`${user.email}`}</span>
                        </div>
                        <img style={{height: '30px', width: '30px'}}
                             src={user.smallAvatar ? user.smallAvatar : defaultPhoto} alt="avatar"/>
                    </>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
