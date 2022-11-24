import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string;
    id: number;
}

type MessagePropsType = {
    text: string;
}


export function Dialogs() {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Sasha'}]

    let messagesData = [
        {id: 1, message: 'Yo1'},
        {id: 2, message: 'Yo2'},
        {id: 3, message: 'Yo3'},
        {id: 4, message: 'Yo4'},
        {id: 5, message: 'Yo5'}]

    return (
        <div className={s.dialogs_container_flex}>
            <div className={s.dialogs_items}>
                <div className={s.name}>Dialogs</div>
                <ul>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={'Maks3'} id={3}/>
                </ul>
            </div>
            <div className={s.dialogs_messages}>
                <Message text={messagesData[0].message}/>
                <FriendMassage text={'Hi I am friend'}/>
            </div>
        </div>
    );
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.user_message}>
            {props.text}
        </div>
    );
}

const FriendMassage = (props: MessagePropsType) => {
    return (
        <div className={s.friend_message}>
            {props.text}
        </div>
    );
}

const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <li><NavLink to={`/dialogs/${props.id}`} className={s.item} activeClassName={s.itemActive}>{props.name}</NavLink></li>
    );
}