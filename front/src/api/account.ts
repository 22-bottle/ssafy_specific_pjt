import { http } from '@/axios'

const api = {
    list: '/account',
    register : '/account',
}

async function list(){
    return await http.get(api.list)
}

async function register(accountNo : string, password : string){
    const requestBody = {
        accountNo : accountNo,
        password : password
    }
    return await http.post(api.register, requestBody);
}

export {list, register}