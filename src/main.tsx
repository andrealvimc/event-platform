import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
