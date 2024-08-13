import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Section from "../Components/Section";
import { Row,Col,Button,Form,Container } from 'react-bootstrap';

const Contact = () => {
    return (
    <Section ID="contact" header="Contact Us">
    <Container className="shadow p-4 mb-4 bg-white rounded">
      <Row>
        <Col md={6}>
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
        <Col md={6}>
          <MapContainer center={[22.632759765105835, 88.45338412119894]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[22.632759765105835, 88.45338412119894]}>
              <Popup>
                Company Address: lorem ipsum dolor, address line abc-road, atown, kolkata-75125221
              </Popup>
            </Marker>
          </MapContainer>
          <div className="mt-3">
            <p><strong>Company Address:</strong> lorem ipsum dolor, address line abc-road, atown, kolkata-75125221</p>
            <p><strong>Company Email ID:</strong>mail@cognitotechnologies.com</p>
            <p><strong>Company Contact No.:</strong> xxxx-xxxx-xx</p>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
);
};




export default Contact;
