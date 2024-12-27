import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from './components/NotFound.tsx'
import Layout from './components/Layout.tsx'
import { routes } from './config/routes.config.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path: path === '/' ? '' : path.slice(1),
        element: <Component />
      })),
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
