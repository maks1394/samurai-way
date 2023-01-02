import {ActionType, ProfilePageType} from "./store";

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi how are you', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state,posts:[...state.posts,newPost],newPostText:''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state,newPostText:action.newPostText}
        default:
            return state
    }
}
export const addPostActionCreate: () => ActionType = () => {
    return {type: "ADD-POST"} as const // as const - only for TS
}
export const updateNewPostTextActionCreate: (text: string) => ActionType = (text) => {
    return {type: "UPDATE-NEW-POST-TEXT", newPostText: text} as const
}
export default profileReducer