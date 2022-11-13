import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={`${s.header} bg_white shadow_xs border_0`}>
            <div className={s.header_top}>
                <a>
                    <i className={`${s.zap} feather-zap text-success display1-size me-2 ms-0`}></i>
                    <span
                        className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span>
                </a>
            </div>
        </header>
    );
}
