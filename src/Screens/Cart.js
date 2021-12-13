import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Header, Tables } from '../Components/Cart/Cart'
import { OrderSummary } from '../Components/OrderSummary'

const Cart = () => {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <Tables />
                    <OrderSummary />
                </Row>
            </Container>
        </div>
    )
}

export default Cart
