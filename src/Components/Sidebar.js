import { useState } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const [show, setShow] = useState(false)
    let location = useLocation()

    return (
        <Container fluid id='sidebar' className='bg-light position-sticky top-0 z-9999'>
            <Navbar collapseOnSelect expand='lg' variant='light' className='py-0'>
                <Navbar.Brand href='/' className='text-dark'>
                    sell
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive' />
                <Navbar.Collapse id='responsive' className='justify-content-between'>
                    <Nav className='mx-auto text-uppercase p-bold'>
                        <Link
                            to='/'
                            className={`m-lg-4 my-2 ${
                                location.pathname === '/' ? 'c-000000f2' : 'c-000000a6'
                            }`}
                        >
                            home
                        </Link>
                        <Link
                            to='/shop'
                            className={`m-lg-4 my-2 ${
                                location.pathname === '/shop' ? 'c-000000f2' : 'c-000000a6'
                            }`}
                        >
                            shop
                        </Link>
                        <Link
                            to='/category/1'
                            className={`m-lg-4 my-2 ${
                                location.pathname === `/category/1` ? 'c-000000f2' : 'c-000000a6'
                            }`}
                        >
                            category
                        </Link>
                        <Link
                            to='/contact'
                            className={`m-lg-4 my-2 ${
                                location.pathname === '/contact' ? 'c-000000f2' : 'c-000000a6'
                            }`}
                        >
                            contact
                        </Link>
                    </Nav>
                    <Nav className='me-lg-3 align-items-center'>
                        <Form>
                            <FormControl
                                type='search'
                                placeholder='Search'
                                className='me-2'
                                aria-label='Search'
                            />
                        </Form>
                        <div className='d-flex my-lg-2 mt-3'>
                            <Link to='/' className='text-dark mx-3'>
                                <i className='far fa-user-circle h5' />
                            </Link>
                            <div
                                className='text-dark h5 position-relative'
                                onClick={() => setShow(!show)}
                            >
                                <i className='fas fa-cart-arrow-down' />
                                <span
                                    className='position-absolute'
                                    style={{
                                        top: '-10px',
                                        fontSize: '10px',
                                        border: '1px solid black',
                                        padding: '1px 4px',
                                        borderRadius: '50%',
                                        background: 'black',
                                        color: 'white',
                                    }}
                                >
                                    3
                                </span>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div
                    className={`dropdown-menu dropdown-menu-animated dropdown-menu-end p-4 position-absolute end-0 border-0 rounded-0 top-100 ${
                        show ? 'd-block' : 'd-none'
                    }`}
                >
                    <div className='navbar-cart-product-wrapper'>
                        <div className='navbar-cart-product'>
                            <div className='d-flex align-items-center'>
                                <Link to='/' onClick={() => setShow(!show)}>
                                    <img
                                        src='https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-ian-dooley-347968-unsplash.jpg'
                                        alt='rasm'
                                        className='img-fluid navbar-cart-product-image'
                                    />
                                </Link>
                                <div className='w-100'>
                                    <div className='navbar-cart-product-close cursor-pointer'>
                                        <i className='fa fa-times' />
                                    </div>
                                    <div className='ps-3'>
                                        <Link
                                            to='/'
                                            className='navbar-cart-product-link'
                                            onClick={() => setShow(!show)}
                                        >
                                            Skull Tee
                                        </Link>
                                        <small className='text-muted d-block'>Quantity: 1</small>
                                        <b className='d-block text-sm'>$75.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-cart-total text-uppercase'>
                        <span className='text-muted'>Total</span>
                        <b>$75.00</b>
                    </div>
                    <div className='d-flex justify-content-between text-uppercase'>
                        <Link
                            to='/'
                            className='btn btn-link text-dark me-3 rounded-0'
                            onClick={() => setShow(!show)}
                        >
                            view cart
                            <i className='fa fa-arrow-right' />
                        </Link>
                        <Link
                            to='/'
                            className='btn btn-outline-dark rounded-0'
                            onClick={() => setShow(!show)}
                        >
                            checkout
                        </Link>
                    </div>
                </div>
            </Navbar>
        </Container>
    )
}
