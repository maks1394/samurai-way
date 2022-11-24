import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export function Dialogs() {
    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Sasha'}]

    let messages = [
        {id: 1, message: 'Yo1'},
        {id: 2, message: 'Yo2'},
        {id: 3, message: 'Yo3'},
        {id: 4, message: 'Yo4'},
        {id: 5, message: 'Yo5'}]

    const mappedDialogs = dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })

    const mappedDialogsMessages = messages.map(el => {
        return (
            <Message text={el.message}/>
        )
    })

    return (
        <div className={s.dialogs_container_flex}>
            <div className={s.dialogs_items}>
                <div className={s.name}>Dialogs</div>
                <ul>
                    {mappedDialogs}
                </ul>
            </div>
            <div className={s.dialogs_messages}>
                {mappedDialogsMessages}
                {/*<Message text={messages[0].message}/>
                <FriendMassage text={'Hi I am friend'}/>*/}
            </div>
        </div>
    );
}

