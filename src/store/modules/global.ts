import { ITheme } from '@/types'
import localCache from '@/utils/storage'
import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    curTheme: {} as ITheme,
  },
  reducers: {
    changeThemeAction(state, { payload }) {
      document.body.setAttribute('class', payload.key)
      localCache.setCache('theme', payload)
      state.curTheme = payload
    },
  },
  extraReducers: {},
})

export const { changeThemeAction } = globalSlice.actions

export default globalSlice.reducer
