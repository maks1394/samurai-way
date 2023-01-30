import React from "react";
import {ActionDialogsType, addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogs-reducer";
import {Dialogs, DialogsDispatchType, DialogsStateType} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (state: StateType): DialogsStateType => {
    return {
        state: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: ActionDialogsType) => void): DialogsDispatchType => {
    return {
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageActionCreate(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreate())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

