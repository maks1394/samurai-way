import React from 'react';
import s from './Header.module.css'
import { IoShareSocialOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header className={`${s.header} bg_white shadow_xs border_0`}>
            <div className={s.header_top}>
                <a>
                    <IoShareSocialOutline className={s.icon}/>
                    <span
                        className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Social </span>
                </a>
            </div>
        </header>
    );
}
