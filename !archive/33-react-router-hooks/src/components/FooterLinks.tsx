import { Link } from 'react-router'
import { menuRoutes } from '../config/routes.config.ts'

const FooterLinks = () => {
  return (
    <div>
      {menuRoutes.map((route) => (
        <Link key={route.path} to={route.path}>{route.label}</Link>
      ))}
    </div>
  )
}

export default FooterLinks
