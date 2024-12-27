import { Link } from 'react-router'
import { routes } from '../config/routes.config.ts'

const FooterLinks = () => {
  return (
    <div>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>{route.label}</Link>
      ))}
    </div>
  )
}

export default FooterLinks
