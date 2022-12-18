import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {TiMessages, TiNews} from "react-icons/ti";
import {BiMusic} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";

export function Navbar() {
    return (
        <nav className={`${s.nav} ${s.scroll_bar}`}>
            <div className={s.nav_widget}>
                <div className={s.nav_widget_name}>Widget Name</div>
                <ul>
                    <li>
                        <NavLink to='/profile' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}><CgProfile/>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}><TiMessages/>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}><TiNews/>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/music' className={s.nav_widget_btn} activeClassName={s.activeLink}><BiMusic/>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}><FiSettings/>Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
