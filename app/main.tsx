import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import './index.css'
import Home from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
    <Home />
    </Layout>
  </React.StrictMode>,
)
