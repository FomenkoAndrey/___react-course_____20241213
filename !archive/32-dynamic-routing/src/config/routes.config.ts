import { ComponentType } from 'react'
import Home from '../components/Home.tsx'
import About from '../components/About.tsx'
import Contacts from '../components/Contacts.tsx'
import Features from '../components/Features.tsx'

interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const routes: Route[] = [
  { path: '', label: 'Home', Component: Home },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts },
  { path: '/features', label: 'Features', Component: Features }
]
