export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
    photos:{
        small:string | null
        large:string | null
    }
}

type StateType = {
    users: UserType[]
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType

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
    pageSize:5,
    totalUsersCount:0,
    currentPage:2
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
        case "CHANGE-CURRENT-PAGE":{
            return {...state,currentPage:action.payload.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state,totalUsersCount:action.payload.count}
        }
        default:
            return state
    }
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
export const setCurrentPageAC = (currentPage:number)=>{
    return {
        type:'CHANGE-CURRENT-PAGE',
        payload:{
            currentPage
        }
    } as const
}

type SetTotalUsersCountACType= ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (count:number)=>{
    return {
        type:'SET-TOTAL-USERS-COUNT',
        payload:{
            count
        }
    } as const
}

export default usersReducer