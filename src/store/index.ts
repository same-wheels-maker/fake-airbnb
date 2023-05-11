import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './modules/global'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    global: globalReducer,
    home: homeReducer,
    entire: entireReducer as any,
  },
})

export default store
