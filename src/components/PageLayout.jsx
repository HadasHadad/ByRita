import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageLayout() {
  return (
    <>
    <div>PageLayout</div>
    <header>header</header>
    <Outlet/>
    <footer>footer</footer>
    

    </>
  )
}
