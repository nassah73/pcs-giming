import {createRoot}from 'react-dom/client'
import './Home/index.css'
import Header from'./Home/header'
const root= createRoot(document.getElementById('root'))
root.render(
  <Header/>
)