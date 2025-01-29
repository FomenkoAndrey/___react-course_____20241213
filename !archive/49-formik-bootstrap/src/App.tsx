import RegistrationForm from './components/RegistrationForm.tsx'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="my-5">React Bootstrap Form</h1>
          <RegistrationForm />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default App
