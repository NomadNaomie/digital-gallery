import Topbar from "./Topbar";
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import "./ContactUs.css";
function ContactUs() {
    return (<>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name (Pronouns)</Form.Label>
                <Form.Control type="text" placeholder="John (They/Them)" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicC" required>
                <Form.Label>Comment Area</Form.Label>
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea" label="Comments">

                <Form.Control
                    as="textarea"
                    placeholder="Leave your comments here"
                    style={{ height: '100px' }} required
                />
            </FloatingLabel>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>)
}
export default ContactUs;