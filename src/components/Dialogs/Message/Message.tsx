import React from "react";
import s from './../Dialogs.module.css'

type MessagePropsType = {
    text: string;
}


export const Message = (props: MessagePropsType) => {
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
