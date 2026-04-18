import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Details from './Components/Details.jsx'
import Update from './Components/Update.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path:'users/:id',
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
    Component:Details
  },
  {
    path:'update/:id',
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
    Component:Update
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
