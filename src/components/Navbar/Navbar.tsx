import React from 'react';
import s from './Navbar.module.css'

export const Navbar = ()=>{
    return(
        <nav className={`${s.nav} ${s.scroll_bar}`}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}