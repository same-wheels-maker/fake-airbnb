import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from '@/services'
import { IInfoData } from '@/types'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload, store) => {
  const dispatch = store.dispatch
  getHomeGoodPriceData().then((res) => dispatch(changeGoodPricesAction(res)))
  getHomeHighScoreData().then((res) => dispatch(changeHighScoreAction(res)))
  getHomeDiscountData().then((res) => dispatch(changeDiscountAction(res)))
  getHomeHotRecommendData().then((res) => dispatch(changeRecommendInfo(res)))
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPricesInfo: {
      title: '',
      list: [],
    } as IInfoData,
    highScoreInfo: {
      title: '',
      subtitle: '',
      list: [],
    } as IInfoData,
    discountInfo: {
      title: '',
      dest_list: {},
    } as IInfoData,
    recommendInfo: {
      title: '',
      dest_list: {},
    } as IInfoData,
  },
  reducers: {
    changeGoodPricesAction(state, { payload }) {
      state.goodPricesInfo = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled as any](state, { payload }) {
      state.goodPricesInfo = payload
    },
  },
})

export const { changeGoodPricesAction, changeHighScoreAction, changeDiscountAction, changeRecommendInfo } =
  homeSlice.actions

export default homeSlice.reducer
