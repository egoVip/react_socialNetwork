
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "8acde0e1-f2fd-49f4-b54b-3bd6538bd060"

    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
               return response.data
            });
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
         });
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
        .then(response => {
            return response.data
         });
    },

}

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//                                         withCredentials: true,
//                                         headers:{
//                                             'API-KEY': "8acde0e1-f2fd-49f4-b54b-3bd6538bd060"

//                                         },
//                                     })
//                                         .then((response) => {
//                                             if (response.data.resultCode === 0) {
//                                                 props.toggleFollow(u.id)
//                                             }
//                                         });