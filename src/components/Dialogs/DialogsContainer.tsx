import React from "react";
import {ActionType, DialogsPageType, ProfilePageType,} from "../../redux/store";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogs-reducer";
import {EmptyObject, Store} from "redux";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export function DialogsContainer(props: DialogsContainerPropsType) {
    const addMessageFunctionCreator = () => {
        return () => props.store.dispatch(addMessageActionCreate())
    }
    const updateNewMessageFunctionCreator = () => {
        return (text: string) => props.store.dispatch(updateNewMessageActionCreate(text))
    }
    return (
        <>
            <Dialogs
                state={props.store.getState().dialogsPage}
                addMessage={addMessageFunctionCreator()}
                updateNewMessage={updateNewMessageFunctionCreator()}
            />
        </>
    );
}

