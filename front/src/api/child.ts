import { http } from '@/axios'

const api = {
    progress: '/stage/child',
    country: '/stage/country',
    book: '/stage/book',
    quiz: 'stage/quiz',
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

async function quiz(stageId: number) {
    return await http.get(`${api.quiz}/${stageId}`);
}

async function answer(stageId: number, price: number, quizzes: Array<object>) {
    const requestBody = {
        stageId : stageId,
        price: price,
        quizzes: quizzes,
    }
    return await http.post(`${api.quiz}`, requestBody);
}

export { progress, country, book, quiz, answer }