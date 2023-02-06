import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bb56c234-8c5c-417c-8bde-ffb61ef1e818"
    }
})

const instanceWithoutHeaders = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

const baseInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}

export const authAPI = {
    authMe(){
        return instanceWithoutHeaders.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return baseInstance.get(`profile/${userId}`)
    },
    setProfileStatus(status:string){
        return instance.put('profile/status', {status})
    },
    getProfileStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    }
}


