import {DispatchType} from "./redux-store";
import {usersAPI} from "../api/api";

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
}

type StateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: {
        [id: number]: boolean
    }
}

type ActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SetIsFetchingACType
    |
    SetFollowingInProgressType

const initialState: StateType = {
    users: [
        /*{
            id: 1,
            photoUrl:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
            followed: false,
            fullName: 'Pavel',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: {}
}

export const usersReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.count}
        }
        case "SET-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "SET-FOLLOWING-IN-PROGRESS": {
            const copyState = {...state}
            if (action.payload.isInProgress) {
                copyState.followingInProgress = {...state.followingInProgress}
                copyState.followingInProgress[action.payload.id] = action.payload.isInProgress
            } else {
                copyState.followingInProgress = {...state.followingInProgress}
                delete copyState.followingInProgress[action.payload.id]
            }
            return copyState
        }
        default:
            return state
    }
}

type SetFollowingInProgressType = ReturnType<typeof setFollowingInProgress>
export const setFollowingInProgress = (isInProgress: boolean, id: number) => {
    return {
        type: 'SET-FOLLOWING-IN-PROGRESS',
        payload: {
            isInProgress,
            id
        }
    } as const
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            count
        }
    } as const
}

type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: DispatchType) => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(setIsFetchingAC(false))
        })
    }
}

export const unfollow = (userId:number) =>{
    return (dispatch:DispatchType)=>{
        dispatch(setFollowingInProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
    }
}

export const follow = (userId:number) =>{
    return (dispatch:DispatchType)=>{
        dispatch(setFollowingInProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
    }
}


export default usersReducer