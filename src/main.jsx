import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './routes/Home/HomePage'
import DashboardPage from './routes/Dashboard/DashboardPage'
import ChatPage from './routes/Chat/ChatPage'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'


const router =createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:"/dashboard",
   children:[
    {path:'/dashboard', element:<DashboardPage/>},
    {path:'/dashboard/chats/:id', element:<ChatPage/>}
   ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
