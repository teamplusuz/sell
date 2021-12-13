import { Col } from 'react-bootstrap'

export const OrderSummary = () => {
    return (
        <Col lg='4' id='ordersummary'>
            <div className='mb-5 bg-light'>
                <div className='p-15'>
                    <h6 className='text-uppercase mb-0'>order summary</h6>
                </div>
                <div className='p-15 pt-1'>
                    <p className='text-sm'>
                        Shipping and additional costs are calculated based on values you have
                        entered.
                    </p>
                    <ul className='order-summary mb-0 list-unstyled'>
                        <li className='d-flex justify-content-between py-4 border-bottom'>
                            <span>Order Subtotal</span>
                            <span>$390.00</span>
                        </li>
                        <li className='d-flex justify-content-between py-4 border-bottom'>
                            <span>Shipping and handling</span>
                            <span>$10.00</span>
                        </li>
                        <li className='d-flex justify-content-between py-4 border-bottom'>
                            <span>Tax</span>
                            <span>$0.00</span>
                        </li>
                        <li className='d-flex justify-content-between py-4'>
                            <span>Total</span>
                            <b className='total'>$400.00</b>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}
