import { getHomeGoodPriceInfo } from '@/services'
import { IGoodPriceInfo } from '@/types'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async () => {
  return await getHomeGoodPriceInfo()
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPricesInfo: {
      title: '',
      list: [],
    } as IGoodPriceInfo,
  },
  reducers: {
    changeGoodPricesAction(state, { payload }) {
      state.goodPricesInfo = payload
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled as any](state, { payload }) {
      state.goodPricesInfo = payload
    },
  },
})

export const { changeGoodPricesAction } = homeSlice.actions

export default homeSlice.reducer
