import { memo, useEffect } from 'react'
import { ThemeProvider as GlobalThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import App from './App'
import { changeThemeAction } from './store/modules/global'
import localCache from './utils/storage'
import theme from './assets/theme'
import { RootState } from './types'

const Theme = memo(() => {
  const { themeMode: mode } = useSelector((state: RootState) => ({
    themeMode: state.global.themeMode
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    const presetTheme = localCache.getCache('mode') || 'light'
    dispatch(changeThemeAction(presetTheme))
  }, [])

  return (
    <GlobalThemeProvider theme={theme[mode] || {}}>
      <MaterialThemeProvider theme={theme[mode]?.mui || {}}>
        {/* <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}> */}
          <HashRouter>
            <App />
          </HashRouter>
        {/* </ConfigProvider> */}
      </MaterialThemeProvider>
    </GlobalThemeProvider>
  )
})

export default Theme
