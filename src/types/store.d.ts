import store from '@/store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export interface IInfoData {
  title: string
  subtitle?: string
  list?: any[]
  dest_list?: any
  dest_address?: any[]
}
