import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"bb56c234-8c5c-417c-8bde-ffb61ef1e818"
    }
})

export const usersAPI ={
    getUsers (currentPage:number,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
            return response.data
        })
    }
}

 function getUsers (currentPage:number,pageSize:number){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
        return response.data
    })
}

