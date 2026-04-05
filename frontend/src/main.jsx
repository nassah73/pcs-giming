import {createRoot}from 'react-dom/client'
import './Home/index.css'
import Pcs from'./pcs/pcs'
import Header from'./Home/header'
const root= createRoot(document.getElementById('root'))
root.render(
  <Header/>
)