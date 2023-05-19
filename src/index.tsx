import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'antd/dist/reset.css'

import 'normalize.css'
import '@/assets/css/index.less'
import '@/assets/theme/theme.less'
import store from './store'
import Theme from './Theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <Theme />
    </Provider>
  </Suspense>,
)
