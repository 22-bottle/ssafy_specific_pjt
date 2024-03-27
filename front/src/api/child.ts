import { http } from '@/axios'

const api = {
    progress: '/stage/child',
    country: '/stage/country',
    book: '/stage/book',
}

async function progress() {
    return await http.get(api.progress);
}

async function country(countryId: number) {
    return await http.get(`${api.country}/${countryId}`);
}

async function book(stageId: number) {
    return await http.get(`${api.book}/${stageId}`);
}

export { progress, country, book }