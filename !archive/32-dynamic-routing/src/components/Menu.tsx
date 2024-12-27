import { NavLink } from 'react-router'
import { routes } from '../config/routes.config.ts'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
