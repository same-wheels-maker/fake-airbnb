import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader className="header">header</AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter className="footer">footer</AppFooter>
    </div>
  )
})

export default App
