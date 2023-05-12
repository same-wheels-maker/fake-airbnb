import store from '@/store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export interface ITheme {
  key: 'light' | 'dark'
  label: string
}

export interface IGoodPriceInfo {
  title: string
  list: any[]
}
