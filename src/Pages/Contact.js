import Section from "../Components/Section";
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Section ID="contact" header="Contact Us">
      <div className="d-flex w-100 justify-content-center align-items-center">
        <Container className="shadow p-4 mb-4 bg-white rounded" style={{
          maxWidth: "500px"
        }}>
          <Row>
            <Col>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Enter your Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Enter your Email</Form.Label>
                  <Form.Control type="email" placeholder="example@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Enter the Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="message..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
};




export default Contact;
