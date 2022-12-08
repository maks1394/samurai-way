import {rerenderEntireTree} from "../render";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type StateType = {
    profilePage:{
        posts:PostType[]
        newPostText:string
    }
    dialogsPage:{
        dialogs:DialogType[]
        messages:MessageType[]
    }
}

export let state:StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ],
        newPostText:''
    },
    dialogsPage: {
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
            {id: 5, message: 'Yo5'}]
    }
}

export const addPost = () =>{
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText:string) =>{
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}