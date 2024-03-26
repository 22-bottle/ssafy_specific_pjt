import { http } from '@/axios'

const api = {
    point: '/point'
}

async function point(){
    return await http.get(api.point)
}

export{point}