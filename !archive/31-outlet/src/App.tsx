import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
