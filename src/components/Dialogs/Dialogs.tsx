import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name:string;
    id:number;
}
const DialogItem =(props:DialogsItemPropsType)=>{
    return(
        <li><NavLink to={`/dialogs/${props.id}`} className={s.item}>{props.name}</NavLink></li>
    );
}

type MessagePropsType = {
    text:string;
}
const Message = (props:MessagePropsType)=>{
    return(
        <div className={s.user_message}>
            {props.text}
        </div>
    );
}
const FriendMassage = (props:MessagePropsType)=>{
    return(
        <div className={s.friend_message}>
            {props.text}
        </div>
    );
}

export function Dialogs() {
    return (
        <div className={s.dialogs_container_flex}>
            <div className={s.dialogs_items}>
                <div className={s.name}>Dialogs</div>
                <ul>
                    <DialogItem name={'Maks1'} id={1}/>
                    <DialogItem name={'Maks2'} id={2}/>
                    <DialogItem name={'Maks3'} id={3}/>
                </ul>
            </div>
            <div className={s.dialogs_messages}>
                <Message text={'Hello'}/>
                <FriendMassage text={'Hi I am friend'} />
            </div>
        </div>
    );
}