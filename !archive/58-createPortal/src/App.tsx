import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './components/Modal.tsx'

const modalRoot = document.getElementById('modal-root')

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const modal = showModal && modalRoot
    ? createPortal(<Modal onClose={handleCloseModal} />, modalRoot)
    : null

  return (
    <div>

      <button onClick={handleShowModal}>Показати модальне вікно</button>
      {modal}
    </div>
  )
}

export default App
