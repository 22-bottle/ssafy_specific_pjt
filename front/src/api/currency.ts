import axios from 'axios'


const api = {
    month: `http://localhost:8080/rate/`,
    today: `http://localhost:8080/rate`,
}
function month(countryID:number){
    const accessToken = localStorage.getItem('accessToken')
    return axios.get(`${api.month}${countryID}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
function today() {
    const accessToken = localStorage.getItem('accessToken')
    return axios.get(api.today, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export { today, month }