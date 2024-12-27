import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import Menu from './components/Menu.tsx'
import FooterLinks from './components/FooterLinks.tsx'
import { ReactElement } from 'react'

const withLayout = (Component: () => ReactElement) => (
  <>
    <Menu />
    <Component />
    <FooterLinks />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: withLayout(Home)
  },
  {
    path: '/about',
    element: withLayout(About)
  },
  {
    path: '/contacts',
    element: withLayout(Contacts)
  },
  {
    path: '*',
    element: withLayout(NotFound)
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
