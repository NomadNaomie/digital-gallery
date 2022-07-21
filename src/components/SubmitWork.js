import Topbar from "./Topbar"
import { Form, Button } from 'react-bootstrap';

function SubmitWork() {
    return (<>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicModelType">
                <Form.Label>Model Type</Form.Label>
                <Form.Control type="text" placeholder="Transformer language model" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAIName">
                <Form.Label>AI Name</Form.Label>
                <Form.Control type="text" placeholder="Dall-e Mini" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPieceName">
                <Form.Label>Piece Name</Form.Label>
                <Form.Control type="text" placeholder="Chibi Nightmare" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPieceName">
                <Form.Label>File Upload</Form.Label>
                <Form.Control type="file" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>)
}
export default SubmitWork