import { http } from '@/axios'

const api = {
    point: '/point',
    ask : '/point/require'
}

async function point(){
    return await http.get(api.point)
}

async function ask(){
    return await http.post(api.point)
}

export{point, ask}