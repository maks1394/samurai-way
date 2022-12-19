import React, {ChangeEvent, createRef, RefObject, useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    DialogType,
    MessageType,
} from "../../redux/state";
import {RiSendPlane2Fill} from "react-icons/ri";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessageText: string
    }
    dispatch: (action: ActionType) => void
}

export function Dialogs(props: DialogsPropsType) {
    const mappedDialogs = props.state.dialogs.map((el, index) => <DialogItem key={index} name={el.name} id={el.id}/>)

    const mappedDialogsMessages = props.state.messages.map((el, index) => {
        return <Message key={index} text={el.message}/>
    })
    const addMessageHandler = () => {
        props.dispatch(addMessageActionCreate())
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageActionCreate(e.currentTarget.value))
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
                    <div className={s.chat_form}>
                        <div className={s.input_div}>
                            <input onChange={onChangeInputHandler} value={props.state.newMessageText}
                                   placeholder={'Start typing...'}/>
                        </div>
                        <button onClick={addMessageHandler}><RiSendPlane2Fill/></button>
                    </div>
                </div>
                {mappedDialogsMessages}
                {/*<Message text={messages[0].message}/>
                <FriendMassage text={'Hi I am friend'}/>*/}
            </div>
        </div>
    );
}

