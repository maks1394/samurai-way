import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsContainerPropsType = {
    // store:StoreType
}

export function DialogsContainer(props: DialogsContainerPropsType) {
    return (
        <>
            <StoreContext.Consumer>
                {(store) => {
                    const addMessageFunctionCreator = () => {
                        return () => store.dispatch(addMessageActionCreate())
                    }
                    const updateNewMessageFunctionCreator = () => {
                        return (text: string) => store.dispatch(updateNewMessageActionCreate(text))
                    }
                    return (
                        <Dialogs
                            state={store.getState().dialogsPage}
                            addMessage={addMessageFunctionCreator()}
                            updateNewMessage={updateNewMessageFunctionCreator()}
                        />
                    )
                }}
            </StoreContext.Consumer>
        </>
    );
}

