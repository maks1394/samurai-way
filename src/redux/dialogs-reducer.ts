import {ActionType, DialogsPageType, MessageType, StateType} from "./state";
export type UpdateNewMessageText = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
function _updateNewMessageText(state:DialogsPageType,text: string) {
    state.newMessageText = text
}
function _addMessage(state:DialogsPageType) {
    const newMessage: MessageType = {
        id: 10,
        message: state.newMessageText
    }
    state.messages = [newMessage, ...state.messages,]
    state.newMessageText = ''
}

const dialogsReducer = (state:DialogsPageType,action:ActionType):DialogsPageType=>{
    switch (action.type) {
        case "ADD-MESSAGE":
            _addMessage(state)
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            _updateNewMessageText(state,action.newMessageText)
            return state
        default:
            return state
    }
     /*if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        _updateNewMessageText(state,action.newMessageText)
    } else if (action.type === "ADD-MESSAGE") {
        _addMessage(state)
    }*/
}
export const updateNewMessageActionCreate = (text: string): UpdateNewMessageText => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text}
}
export const addMessageActionCreate = (): AddMessageActionType => {
    return {type: "ADD-MESSAGE"}
}
export default dialogsReducer