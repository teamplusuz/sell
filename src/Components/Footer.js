import React from 'react'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
    const services = [
        {
            id: 1,
            icon: 'fas fa-shipping-fast',
            h6: 'free shipping & return',
            p: 'Free Shipping over $300',
        },
        {
            id: 2,
            icon: 'fas fa-money-check-alt',
            h6: 'money back guarantee',
            p: '30 Days Money Back Guarantee',
        },
        {
            id: 3,
            icon: 'fas fa-headset',
            h6: '020-800-456-747',
            p: '24/7 Available Support',
        },
    ]

    return (
        <div id='footer' className='mt-5'>
            <div className='bg-gray-100 py-6'>
                <Container>
                    <Row>
                        {services.map(service => (
                            <Col
                                lg='4'
                                className='d-flex service-column justify-content-center my-lg-0 my-4'
                                key={service.id}
                            >
                                <i className={`${service.icon} fs-lg-42 pt-1 me-4`} />
                                <div className='service-text'>
                                    <h6
                                        className='text-uppercase'
                                        style={{ letterSpacing: '0.1em' }}
                                    >
                                        {service.h6}
                                    </h6>
                                    <p className='text-muted p-light text-sm mb-0'>{service.p}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div className='bgc-dee2e6 py-5'>
                <Container>
                    <Row>
                        <Col lg='4' className='mb-5 mb-lg-0'>
                            <div className='p-bold text-uppercase text-lg text-dark mb-3'>
                                sell.
                            </div>
                            <p>Anim sunt id reprehenderit consequat dolor ullamco id magna.</p>
                            <div className='d-flex'>
                                <Link to='/' className='text-muted me-2'>
                                    <i className='fab fa-twitter' />
                                </Link>
                                <Link to='/' className='text-muted mx-2'>
                                    <i className='fab fa-facebook-square' />
                                </Link>
                                <Link to='/' className='text-muted mx-2'>
                                    <i className='fab fa-instagram' />
                                </Link>
                                <Link to='/' className='text-muted mx-2'>
                                    <i className='fab fa-pinterest' />
                                </Link>
                                <Link to='/' className='text-muted mx-2'>
                                    <i className='fab fa-vimeo' />
                                </Link>
                            </div>
                        </Col>
                        <Col lg='2' className='mb-5 mb-lg-0'>
                            <h6 className='text-uppercase'>shop</h6>
                            <ul className='list-unstyled'>
                                {['for women', 'for men', 'stores', 'our blog', 'shop'].map(
                                    shop => (
                                        <li key={shop}>
                                            <Link to='/' className='text-capitalize text-muted'>
                                                {shop}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </Col>
                        <Col lg='2' className='mb-5 mb-lg-0'>
                            <h6 className='text-uppercase'>company</h6>
                            <ul className='list-unstyled'>
                                {['login', 'register', 'wishlist', 'our products', 'checkouts'].map(
                                    company => (
                                        <li key={company}>
                                            <Link to='/' className='text-capitalize text-muted'>
                                                {company}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </Col>
                        <Col lg='4' className='mb-5 mb-lg-0'>
                            <h6 className='text-uppercase'>daily offers & discounts</h6>
                            <p>
                                Officia nostrud Lorem consequat velit fugiat incididunt commodo
                                magna officia reprehenderit deserunt sit ad magna.
                            </p>
                            <InputGroup className='mb-3 border border-dark'>
                                <FormControl
                                    placeholder='Your Email Address'
                                    aria-label='email'
                                    type='email'
                                    className='border-0 bg-transparent outline-0'
                                />
                                <span className='icon telegram bg-dark mt-1 me-2' />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
