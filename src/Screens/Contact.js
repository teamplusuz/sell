import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Breadcrumbs } from '../Components/Breadcrumbs'

const Contact = () => {
    return (
        <Container id='contact' className='mt-5'>
            <Breadcrumbs title1={'Contact'} center className={'my-4'}  />
            <h1 className='hero-header text-uppercase text-center display-3 p-bold'>contact</h1>
            <Row>
                <Col xl={{ span: 8, offset: 2 }}>
                    <p className='lead text-muted text-center'>
                        Are you curious about something? As am hastily invited settled at limited
                        civilly fortune me. Really spring in extent an by. Judge but built party
                        world. Of so am he remember although required. Bachelor unpacked be advanced
                        at. Confined in declared marianne is vicinity.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
