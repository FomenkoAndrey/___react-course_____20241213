import { Link } from 'react-router'

const FooterLinks = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  )
}

export default FooterLinks