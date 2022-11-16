import React from "react";
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs_container_flex}>
            <div className={s.dialogs_items}>
                <div className={s.name}>Dialogs</div>
                <ul>
                    <li>Maks</li>
                    <li>Maks</li>
                    <li>Maks</li>
                </ul>
            </div>
            <div className={s.dialogs_messages}>
                <div className={s.user_message}>
                    Hello
                </div>
                <div className={s.friend_message}>
                    Hi I am friend
                </div>
            </div>
        </div>
    );
}