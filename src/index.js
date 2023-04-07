import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from 'ui/settings/theme'
import { GlobalStyle } from 'ui/settings/global'
import { store } from 'store/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('reactor'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
