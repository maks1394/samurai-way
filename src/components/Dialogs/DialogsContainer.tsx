import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogs-reducer";
import {Dialogs, DialogsDispatchType, DialogsStateType} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType} from "../../redux/store";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (state: StateType):DialogsStateType => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void):DialogsDispatchType => {
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

