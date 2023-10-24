import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoreInfo from './pages/MoreInfo'
import Home from './pages/Home'


const App = () => {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'social',
      element:<MoreInfo/>
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App