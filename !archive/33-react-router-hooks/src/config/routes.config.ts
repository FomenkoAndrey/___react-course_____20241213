import { ComponentType } from 'react'
import Home from '../components/Home.tsx'
import About from '../components/About.tsx'
import Contacts from '../components/Contacts.tsx'
import Features from '../components/Features.tsx'
import ErrorPage from '../components/ErrorPage.tsx'
import RevalidatorDemo from '../components/RevalidatorDemo.tsx'

interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const menuRoutes: Route[] = [
  { path: '', label: 'Home', Component: Home },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts },
  { path: '/features', label: 'Features', Component: Features },
  { path: '/error', label: 'Error Test', Component: ErrorPage },
  { path: '/revalidator', label: 'Revalidator', Component: RevalidatorDemo }
]

export const routes = [
  ...menuRoutes,
  { path: '/features/:id', label: 'Features', Component: Features }
]
