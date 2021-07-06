import {requestPost} from '../common'

//login
export function login(data) {
    return new Promise((resolve,reject) => {
        requestPost('/login',data).then(res=>resolve(res))
        .catch(err=>reject(err))
    })
} 