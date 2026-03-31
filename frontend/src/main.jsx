import {createRoot}from 'react-dom/client'
import './index.css'
import Header from'./header'
const root= createRoot(document.getElementById('root'))
root.render(
  <Header/>
)