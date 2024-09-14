import { useEffect, useState } from "react";
import Section from "../Components/Section";
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setHide(!(name.length && email.length && subject.length && message.length));
  }, [name, email, subject, message])

  const handleClick = (e) => {
      e.preventDefault(); 
      if(hide) return;
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('mail@cognitotechnologies.com')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`I am ${name}.\nMy email id is ${email}\n${message}`)}`, '_blank'); 
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
  }
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
                      <Form.Control required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control required type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Enter your Email</Form.Label>
                  <Form.Control required type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Enter the Message</Form.Label>
                  <Form.Control required as="textarea" rows={3} placeholder="message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>
                <Button onClick={handleClick} style={{
                  opacity : `${hide? '0.5' : '1'}`,
                  cursor : `${hide? 'not-allowed' : 'pointer'}`
                }} variant="dark" type="submit">
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
