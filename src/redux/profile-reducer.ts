import {DispatchType, GetStateType} from "./redux-store";
import axios from "axios";
import {profileAPI} from "../api/api";

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type ProfileInfoType = {
    aboutMe: string | null | undefined
    contacts: {
        facebook: string | null | undefined
        website: string | null | undefined
        vk: string | null | undefined
        twitter: string | null | undefined
        instagram: string | null | undefined
        youtube: string | null | undefined
        github: string | null | undefined
        mainLink: string | null | undefined
    }
    lookingForAJob: boolean | null | undefined
    lookingForAJobDescription: string | null | undefined
    fullName: string | null | undefined
    userId: number | null | undefined
    photos: {
        small: string | null | undefined
        large: string | null | undefined
    }
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profileInfo: ProfileInfoType | null
    isProfileFetching: boolean
    profileStatus:{
        status:string
        temporaryStatus:string
        editMode:boolean
    }
}

const initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi how are you', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: '',
    profileInfo: null,
    isProfileFetching: false,
    profileStatus:{
        status:'',
        temporaryStatus:'',
        editMode:false
    }
}

type ActionProfileType = AddPostActionType | UpdateNewPostText | setProfileInfo | SetIsFetchingType | SetProfileStatusACType | SetTemporaryProfileStatusACType | SetEditModeProfileStatusACType

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        case "SET-PROFILE-INFO":
            return {...state, profileInfo: action.payload.profileInfo}
        case "SET-IS-FETCHING":
            return {...state, isProfileFetching: action.payload.isFetching}
        case "SET-PROFILE-STATUS":
            return {...state,profileStatus:{...state.profileStatus,status:action.payload.status}}
        case "SET-TEMPORARY-PROFILE-STATUS":
            return {...state,profileStatus:{...state.profileStatus,temporaryStatus:action.payload.TemporaryStatus}}
        case "SET-EDIT-MODE-PROFILE-STATUS":
            return {...state,profileStatus:{...state.profileStatus,editMode:action.payload.editMode}}
        default:
            return state
    }
}
export const addPostActionCreate: () => ActionProfileType = () => {
    return {type: "ADD-POST"} as const // as const - only for TS
}
export const updateNewPostTextActionCreate: (text: string) => ActionProfileType = (text) => {
    return {type: "UPDATE-NEW-POST-TEXT", newPostText: text} as const
}

type setProfileInfo = ReturnType<typeof setProfileInfo>
export const setProfileInfo = (profileInfo: ProfileInfoType) => {
    return {
        type: 'SET-PROFILE-INFO',
        payload: {
            profileInfo
        }
    } as const
}

type SetIsFetchingType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const setProfile = (userID: string) => {
    return (dispatch: DispatchType) => {
        dispatch(setIsFetching(true))
        profileAPI.getProfile(userID).then(response => {
            dispatch(setProfileInfo(response.data))
            dispatch(setIsFetching(false))
        })
    }
}

type SetProfileStatusACType = ReturnType<typeof setProfileStatusAC>
const setProfileStatusAC = (status:string)=>{
    return {
        type:'SET-PROFILE-STATUS',
        payload:{
            status
        }
    } as const
}

type SetTemporaryProfileStatusACType = ReturnType<typeof setTemporaryProfileStatusAC>
export const setTemporaryProfileStatusAC = (TemporaryStatus:string)=>{
    return {
        type:'SET-TEMPORARY-PROFILE-STATUS',
        payload:{
            TemporaryStatus
        }
    } as const
}

type SetEditModeProfileStatusACType = ReturnType<typeof setEditModeProfileStatusAC>
export const setEditModeProfileStatusAC = (editMode:boolean)=>{
    return {
        type:'SET-EDIT-MODE-PROFILE-STATUS',
        payload:{
            editMode
        }
    } as const
}

export const getProfileStatusTC = (profileId:string)=>{
    return (dispatch:DispatchType)=>{
        profileAPI.getProfileStatus(profileId).then(resp => {
            dispatch(setProfileStatusAC(resp.data))
            dispatch(setTemporaryProfileStatusAC(resp.data))
        })
    }
}

export const setProfileStatusTC = (status:string)=>{
    return (dispatch:DispatchType,getState:GetStateType)=>{
        profileAPI.setProfileStatus(status).then((resp) => {
            dispatch(setProfileStatusAC(getState().profilePage.profileStatus.temporaryStatus))
            dispatch(setEditModeProfileStatusAC(false))
        }).catch(error => {
            console.log(error)
        })
    }
}


export default profileReducer

let obj: ProfileInfoType = {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
        "facebook": "facebook.com",
        "website": null,
        "vk": "vk.com/dimych",
        "twitter": "https://twitter.com/@sdf",
        "instagram": "instagra.com/sds",
        "youtube": null,
        "github": "github.com",
        "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": 2,
    "photos": {
        "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
}