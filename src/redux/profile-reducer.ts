import {ActionType, ProfilePageType} from "./state";
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
function _addPost(state:ProfilePageType) {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
    }
    state.posts.push(newPost)
    state.newPostText = ''
}
function _updateNewPostText(state:ProfilePageType,newPostText: string) {
    state.newPostText = newPostText
}

const profileReducer = (state:ProfilePageType,action:ActionType):ProfilePageType=>{
    switch (action.type){
        case "ADD-POST":
            _addPost(state)
            return state
        case "UPDATE-NEW-POST-TEXT":
            _updateNewPostText(state,action.newPostText)
            return state
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