import {ActionType, ProfilePageType} from "./store";
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

const initialState = {
        posts: [
            {id: 1, message: 'Hi how are you', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ],
        newPostText: ''
    }

export const profileReducer = (state:ProfilePageType=initialState,action:ActionType):ProfilePageType=>{
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