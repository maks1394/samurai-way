import {DispatchType} from "./redux-store";
import {authAPI, profileAPI, usersAPI} from "../api/api";
import {followAC, setFollowingInProgress} from "./users-reducer";

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    smallAvatar:string | null
}
const InitialState: AuthStateType = {
    "id": null,
    "login": null,
    "email": null,
    isAuth: false,
    smallAvatar:null
}

type ActionAuthType = SetUserDataType | SetAvatarUrlType
export const authReducer = (state: AuthStateType = InitialState, action: ActionAuthType): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state,...action.payload,isAuth:true} //...state,email:action.payload.email,login:action.payload.login,id:action.payload.id
        }
        case "SET-SMALL-AVATAR":{
            return {...state,smallAvatar:action.payload.smallAvatar}
        }
        default:
            return state
    }
}

type SetAvatarUrlType = ReturnType<typeof setAvatarUrl>
export const setAvatarUrl = (smallAvatar:string) =>{
    return {
        type:'SET-SMALL-AVATAR',
        payload:{
            smallAvatar
        }
    } as const
}

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: AuthStateType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            ...data
        }
    } as const
}

export const authMe = ()=>{
    return (dispatch:DispatchType)=>{
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data))
                return response.data.data.id
            }
        }).then((id) => {
            return profileAPI.getProfile(id) // for TS
        }).then((response) => {
            if (response.status === 200) {
                dispatch(setAvatarUrl(response.data.photos.small))
            }
        })
    }
}

export default authReducer