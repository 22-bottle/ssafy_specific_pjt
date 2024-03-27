import axios from 'axios';

const api = {
    progress: 'http://localhost:8080/stage/child',
    country: 'http://localhost:8080/stage/country/',
    book: 'http://localhost:8080/stage/book/',
}

function progress() {
    const accessToken = localStorage.getItem('accessToken')
    return axios.get(`${api.progress}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

function country(countryId: number) {
    const accessToken = localStorage.getItem('accessToken')
    return axios.get(`${api.country}${countryId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

function book(stageId: number) {
    const accessToken = localStorage.getItem('accessToken')
    return axios.get(`${api.book}${stageId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export { progress, country, book }