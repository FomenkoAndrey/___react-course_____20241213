import Menu from './Menu.tsx'
import FooterLinks from './FooterLinks.tsx'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <FooterLinks />
    </>
  )
}

export default Layout
