import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={`${s.nav} ${s.scroll_bar}`}>
            <div className={s.nav_widget}>
                <div className={s.nav_widget_name}>Widget Name</div>
                <ul>
                    <li>
                        <NavLink to='/profile' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className={s.nav_widget_btn} activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/music' className={s.nav_widget_btn} activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings' className={s.nav_widget_btn}
                                 activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
