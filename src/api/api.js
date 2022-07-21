
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "17987cf3-3f74-43ae-ae74-3395775144e7"

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


};

export const profileAPI = {
    getProfiles(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
    }

};

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`,)
    },

}



