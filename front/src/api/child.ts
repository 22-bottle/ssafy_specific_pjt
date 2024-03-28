import { http } from '@/axios'

const api = {
  progress: '/stage/child',
  country: '/stage/country',
  book: '/stage/book',
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

async function tutorial() {
  return await http.patch(api.tutorial)
}

export { progress, country, book, tutorial }
