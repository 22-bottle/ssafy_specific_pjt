import { http } from '@/axios'

const api = {
  progress: '/stage/child',
  country: '/stage/country',
  book: '/stage/book',
  quiz: 'stage/quiz',
  tutorial: '/stage/tutorial',
}

async function progress() {
  return await http.get(api.progress)
}

async function country(countryId: number) {
  return await http.get(`${api.country}/${countryId}`)
}

async function book(stageId: number) {
  return await http.get(`${api.book}/${stageId}`)
}

async function quiz(stageId: number) {
  return await http.get(`${api.quiz}/${stageId}`)
}

async function answer(stageId: number, price: number, quizes: Array<object>) {
  const requestBody = {
    stageId: stageId,
    price: price,
    quizes: quizes,
  }
  return await http.post(`${api.quiz}`, requestBody)
}
async function tutorial() {
  return await http.patch(api.tutorial)
}

export { progress, country, book, tutorial, quiz, answer }
