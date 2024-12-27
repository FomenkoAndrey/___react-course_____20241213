import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import FooterLinks from './components/FooterLinks.tsx'
import Menu from './components/Menu.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterLinks />
    </BrowserRouter>
  )
}

export default App
