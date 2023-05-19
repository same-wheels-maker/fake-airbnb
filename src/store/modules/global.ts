import { ITheme } from '@/types'
import localCache from '@/utils/storage'
import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    themeMode: '',
  },
  reducers: {
    changeThemeAction(state, { payload }) {
      document.body.setAttribute('class', payload)
      localCache.setCache('mode', payload)
      state.themeMode = payload
    },
  },
  extraReducers: {},
})

export const { changeThemeAction } = globalSlice.actions

export default globalSlice.reducer
