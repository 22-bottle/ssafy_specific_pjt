import { atom, DefaultValue } from 'recoil'

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: number | DefaultValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    })
  }

export const accessTokenState = atom<string>({
  key: 'accessTokenState',
  default: '',
  effects_UNSTABLE: [localStorageEffect('accessToken')],
})

export const refreshTokenState = atom<string>({
  key: 'refreshTokenState',
  default: '',
  effects_UNSTABLE: [localStorageEffect('refreshToken')],
})
