import { Col, Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
          
    <Container>
      <Row>
        <Col sm={1} className="mx-auto mt-5">
          <Spinner animation="border" />
        </Col>
      </Row>
    </Container>

  )
}

export default Loading