import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AllCheck, Header } from '../Components/Checkout/Checkout'
import { OrderSummary } from '../Components/OrderSummary'

const Checkout = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Header />
                <Row>
                    <AllCheck />
                    <OrderSummary />
                </Row>
            </Container>
        </div>
    )
}

export default Checkout
