import React, { memo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import App from './App'
import theme from './assets/theme'
import localCache from './utils/storage'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeThemeAction } from './store/modules/global'
import { RootState } from './types'

const Theme = memo(() => {
  const { curTheme } = useSelector((state: RootState) => ({
    curTheme: state.global.curTheme
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const presetTheme = localCache.getCache('theme') || { key: 'light', label: theme.light.label  }
    dispatch(changeThemeAction(presetTheme))
  }, [])

  return (
    <ThemeProvider theme={theme[curTheme.key] || {}}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  )
})

export default Theme