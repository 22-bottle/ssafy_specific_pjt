import { http } from '@/axios'

const api = {
    list: '/account',
}

async function list(){
    return await http.get(api.list)
}

export {list}