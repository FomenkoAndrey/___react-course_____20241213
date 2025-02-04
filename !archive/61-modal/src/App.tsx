import { useRef, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal-root')

function App() {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = 'indigo'
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
      <div>
        <button onClick={openModal}>Open Modal</button>

        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
          <h2 ref={subtitle}>Hello</h2>
          <button onClick={closeModal}>✖</button>
          <div>I am a modal</div>
          <form>
            <input/>
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
  )
}

export default App
