import React, {createRef, useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
}

export function Dialogs(props: DialogsPropsType) {
    // const inputRef = useRef<HTMLInputElement>(null);
    const inputRef = createRef<HTMLInputElement>()


    const mappedDialogs = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    const mappedDialogsMessages = props.state.messages.map(el => <Message text={el.message}/>)
    const addMessageHandler = ()=>{
        inputRef.current &&
        alert(inputRef.current.value)
    }

    return (
        <div className={s.dialogs_container_flex}>
            <div className={s.dialogs_items}>
                <div className={s.name}>Dialogs</div>
                <ul>
                    {mappedDialogs}
                </ul>
            </div>
            <div className={s.dialogs_messages}>
                <div className={s.chat_form_container}>
                    <form className={s.chat_form}>
                        <div className={s.input_div}>
                            <input ref={inputRef} placeholder={'Start typing...'}/>
                        </div>
                        <button onClick={addMessageHandler}>^</button>
                    </form>
                </div>
                {mappedDialogsMessages}
                {/*<Message text={messages[0].message}/>
                <FriendMassage text={'Hi I am friend'}/>*/}
            </div>
        </div>
    );
}

