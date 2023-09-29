import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../AppBar'

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main> 
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  )
}

export default Layout