import {ActionType, DialogsPageType, MessageType} from "./store";

export type UpdateNewMessageText = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Sasha'}],
    messages: [
        {id: 1, message: 'Yo1'},
        {id: 2, message: 'Yo2'},
        {id: 3, message: 'Yo3'},
        {id: 4, message: 'Yo4'},
        {id: 5, message: 'Yo5'}],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: 10,
                message: state.newMessageText
            }
            state.newMessageText = ''
            return {...state,messages:[newMessage, ...state.messages,]}
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state,newMessageText:action.newMessageText}
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