import { Col, Row } from 'react-bootstrap'

const Text = ({ title, subtitle }) => {
    return (
        <div>
            <Row className='my-5 text-center'>
                <Col md='8' className='mx-auto'>
                    <h2 className='text-uppercase'>{title}</h2>
                    <p className='lead text-muted'>{subtitle}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Text
