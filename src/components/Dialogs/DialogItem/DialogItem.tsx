import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string;
    id: number;
}

export const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <li><NavLink to={`/dialogs/${props.id}`} className={s.item}
                     activeClassName={s.itemActive}>{props.name}</NavLink></li>
    );
}