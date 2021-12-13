import { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Breadcrumbs } from './../Breadcrumbs'
import './Checkout.scss'

export const Header = () => {
    return (
        <div id='header'>
            <Breadcrumbs title1='Checkout' center className='mb-4' />
            <div className='text-center'>
                <h1 className='text-uppercase hero-heading display-3 p-bold'>checkout</h1>
                <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                        <p className='lead text-muted'>Please fill in your address.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export const AllCheck = () => {
    const [allcheck, setAllcheck] = useState('address')
    const history = useHistory()
    const location = useLocation()
    const allcheck1 = [
        {
            id: 1,
            name: 'address',
            state1: 'address',
            on: true,
        },
        {
            id: 2,
            name: 'delivery method',
            state1: 'delivery',
            on: true,
        },
        {
            id: 3,
            name: 'payment method',
            state1: 'payment',
            on: true,
        },
        {
            id: 4,
            name: 'order review',
            state1: 'order',
            on: true,
        },
    ]

    useEffect(() => {
        history.push(`/checkout/${allcheck}`)
    }, [history, allcheck])

    return (
        <Col lg='8' id='allcheck'>
            <ul className='text-uppercase p-0 border-0 rounded-0 nav nav-pills mb-5 text-center bg-light'>
                {allcheck1.map(check => (
                    <li
                        className={`nav-item w-25 p-3 t3 ${
                            check.state1 === allcheck
                                ? 'bg-gray-700 text-white'
                                : 'position-relative'
                        } ${check.on ? 'hover cursor-pointer' : 'cursor'}`}
                        key={check.id}
                        onClick={() => {
                            check.on ? setAllcheck(check.state1) : setAllcheck(allcheck)
                        }}
                    >
                        {check.name}
                    </li>
                ))}
            </ul>
            <div>
                {location.pathname === '/checkout/address' ? (
                    <Address />
                ) : location.pathname === '/checkout/delivery' ? (
                    <Delivery />
                ) : location.pathname === '/checkout/payment' ? (
                    <Payment />
                ) : (
                    <Order />
                )}
            </div>
        </Col>
    )
}

export const Address = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [street1, setStreet1] = useState('')
    const [city1, setCity1] = useState('')
    const [zip1, setZip1] = useState('')
    const [state1, setState1] = useState('')
    const [phone1, setPhone1] = useState('')
    // empty
    const [nameno, setNameno] = useState(false)
    const [emailno, setEmailno] = useState(false)
    const [streetno, setStreetno] = useState(false)
    const [cityno, setCityno] = useState(false)
    const [zipno, setZipno] = useState(false)
    const [stateno, setStateno] = useState(false)
    const [phoneno, setPhoneno] = useState(false)
    const [street1no, setStreet1no] = useState(false)
    const [city1no, setCity1no] = useState(false)
    const [zip1no, setZip1no] = useState(false)
    const [state1no, setState1no] = useState(false)
    const [phone1no, setPhone1no] = useState(false)
    const [use, setUse] = useState(false)
    const history = useHistory()

    const done = e => {
        e.preventDefault()
        if (!use) {
            if (
                (name.length !== 0,
                email.length !== 0,
                street.length !== 0,
                city.length !== 0,
                zip.length !== 0,
                state.length !== 0,
                phone.length !== 0)
            ) {
                console.log('Success')
                history.push('/checkout/delivery')
            }

            ;[
                {
                    name,
                    change: setNameno,
                },
                { name: email, change: setEmailno },
                { name: street, change: setStreetno },
                { name: city, change: setCityno },
                { name: zip, change: setZipno },
                { name: state, change: setStateno },
                { name: phone, change: setPhoneno },
            ].forEach(nma => {
                if (nma.name.length === 0) nma.change(true)
                else nma.change(false)
            })
        } else {
            if (
                (street1.length !== 0,
                city1.length !== 0,
                zip1.length !== 0,
                state1.length !== 0,
                phone1.length !== 0)
            ) {
            }

            ;[
                { name: street1, change: setStreet1no },
                { name: city1, change: setCity1no },
                { name: zip1, change: setZip1no },
                { name: state1, change: setState1no },
                { name: phone1, change: setPhone1no },
            ].forEach(nma => {
                if (nma.name.length === 0) nma.change(true)
                else nma.change(false)
            })
        }
    }

    return (
        <Form id='address' className='block'>
            <div className='block-header bg-light'>
                <h6 className='text-uppercase mb-0'>INVOICE ADDRESS</h6>
            </div>
            <div className='block-header text-muted'>
                <Row>
                    <Col md='6'>
                        <Form.Group controlId='name'>
                            <Form.Label className='text-uppercase'>full name</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${nameno ? 'border-danger' : ''}`}
                                placeholder='Joe Black'
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='email'>
                            <Form.Label className='text-uppercase'>email address</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${emailno ? 'border-danger' : ''}`}
                                placeholder='joe.black@gmail.com'
                                name='email'
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='street'>
                            <Form.Label className='text-uppercase'>street</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${streetno ? 'border-danger' : ''}`}
                                placeholder='123 Main St.'
                                name='street'
                                value={street}
                                onChange={e => setStreet(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='city'>
                            <Form.Label className='text-uppercase'>city</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${cityno ? 'border-danger' : ''}`}
                                placeholder='City'
                                name='city'
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='zip'>
                            <Form.Label className='text-uppercase'>zip</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${zipno ? 'border-danger' : ''}`}
                                placeholder='Postal code'
                                name='zip'
                                type='number'
                                value={zip}
                                onChange={e => setZip(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='state'>
                            <Form.Label className='text-uppercase'>state</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${stateno ? 'border-danger' : ''}`}
                                placeholder='State'
                                name='state'
                                value={state}
                                onChange={e => setState(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group controlId='phone'>
                            <Form.Label className='text-uppercase'>phone number</Form.Label>
                            <Form.Control
                                className={`rounded-0 ${phoneno ? 'border-danger' : ''}`}
                                placeholder='Phone Number'
                                name='phone'
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md='12' className='mb-4 mt-3'>
                        <Form.Group controlId='check'>
                            <Form.Check
                                type='checkbox'
                                label='Use a different shipping address'
                                defaultChecked={use}
                                onClick={() => setUse(!use)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            <div className={`t3 ${use ? 'overflow-hidden h100' : 'overflow-hidden h-0'}`}>
                <div className='block-header bg-light'>
                    <h6 className='text-uppercase mb-0'>shipping addres</h6>
                </div>
                <div className='block-header text-muted'>
                    <Row>
                        <Col md='6'>
                            <Form.Group controlId='street'>
                                <Form.Label className='text-uppercase'>street</Form.Label>
                                <Form.Control
                                    className={`rounded-0 ${street1no ? 'border-danger' : ''}`}
                                    placeholder='123 Main St.'
                                    name='street'
                                    value={street1}
                                    onChange={e => setStreet1(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId='city'>
                                <Form.Label className='text-uppercase'>city</Form.Label>
                                <Form.Control
                                    className={`rounded-0 ${city1no ? 'border-danger' : ''}`}
                                    placeholder='City'
                                    name='city'
                                    value={city1}
                                    onChange={e => setCity1(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId='zip'>
                                <Form.Label className='text-uppercase'>zip</Form.Label>
                                <Form.Control
                                    className={`rounded-0 ${zip1no ? 'border-danger' : ''}`}
                                    placeholder='Postal code'
                                    name='zip'
                                    type='number'
                                    value={zip1}
                                    onChange={e => setZip1(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId='state'>
                                <Form.Label className='text-uppercase'>state</Form.Label>
                                <Form.Control
                                    className={`rounded-0 ${state1no ? 'border-danger' : ''}`}
                                    placeholder='State'
                                    name='state'
                                    value={state1}
                                    onChange={e => setState1(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId='phone'>
                                <Form.Label className='text-uppercase'>phone number</Form.Label>
                                <Form.Control
                                    className={`rounded-0 ${phone1no ? 'border-danger' : ''}`}
                                    placeholder='Phone Number'
                                    name='phone'
                                    value={phone1}
                                    onChange={e => setPhone1(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-column flex-lg-row text-uppercase last'>
                <Link to='/' className='btn btn-link text-muted rounded-0'>
                    <i className='fa fa-chevron-left pe-2' />
                    back
                </Link>
                <div className='btn btn-dark rounded-0 cursor-pointer' onClick={done}>
                    choose delivery method
                    <i className='fa fa-chevron-right ps-2' />
                </div>
            </div>
        </Form>
    )
}

export const Delivery = () => {
    const [check, setCheck] = useState('')
    const history = useHistory()
    const done = e => {
        e.preventDefault()
        if (check.length !== 0) history.push('/checkout/payment')
    }

    return (
        <Form id='delivery' className='my-5'>
            <div className='block-header'>
                <Row>
                    {[...new Array(4)].map((ind, index) => (
                        <Col md='6' className='mb-4 d-flex align-items-center' key={index}>
                            <input
                                type='radio'
                                name='shipping'
                                id={`option${index}`}
                                onClick={() => setCheck(`option${index}`)}
                            />
                            <label className='ms-3' htmlFor={`option${index}`}>
                                <b className='text-uppercase d-block mb-2'>usps next day</b>
                                <span className='text-muted text-sm'>
                                    Get it right on next day - fastest option possible.
                                </span>
                            </label>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='d-flex justify-content-between flex-column flex-lg-row text-uppercase last'>
                <Link to='/checkout/address' className='btn btn-link text-muted rounded-0'>
                    <i className='fa fa-chevron-left pe-2' />
                    back to the address
                </Link>
                <div className='btn btn-dark rounded-0 cursor-pointer' onClick={done}>
                    choose payment method
                    <i className='fa fa-chevron-right ps-2' />
                </div>
            </div>
        </Form>
    )
}

export const Payment = () => {
    const [payment, setPayment] = useState('credit')
    const history = useHistory()
    const done = e => {
        e.preventDefault()
        history.push('/checkout/payment')
    }
    const change = e => {
        // e.preventDefault()
        if (payment === e) setPayment('')
        else setPayment(e)
    }

    return (
        <div id='payment' className='mb-5'>
            <div>
                <div className='mb-3'>
                    <div className='block-header bg-light'>
                        <b
                            className='text-uppercase cursor-pointer'
                            onClick={() => change('credit')}
                        >
                            credit card
                        </b>
                    </div>
                    <div
                        className={`t3 ${
                            payment === 'credit' ? 'overflow-hidden h100' : 'overflow-hidden h-0'
                        }`}
                    >
                        <div className='block-header'>
                            <Form>
                                <Row>
                                    <Col md='6' className='mb-4'>
                                        <Form.Group controlId='card-name'>
                                            <Form.Label className='text-uppercase'>
                                                name on card
                                            </Form.Label>
                                            <Form.Control
                                                name='card-name'
                                                placeholder='Name on card'
                                                className='rounded-0'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md='6' className='mb-4'>
                                        <Form.Group controlId='card-number'>
                                            <Form.Label className='text-uppercase'>
                                                card number
                                            </Form.Label>
                                            <Form.Control
                                                name='card-number'
                                                placeholder='Card number'
                                                className='rounded-0'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md='4' className='mb-4'>
                                        <Form.Group controlId='expiry-date'>
                                            <Form.Label className='text-uppercase'>
                                                card number
                                            </Form.Label>
                                            <Form.Control
                                                name='expiry-date'
                                                placeholder='MM/YY'
                                                className='rounded-0'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md='4' className='mb-4'>
                                        <Form.Group controlId='cvv'>
                                            <Form.Label className='text-uppercase'>
                                                cvc/cvv
                                            </Form.Label>
                                            <Form.Control
                                                name='cvv'
                                                placeholder='123'
                                                className='rounded-0'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md='4' className='mb-4'>
                                        <Form.Group controlId='zip'>
                                            <Form.Label className='text-uppercase'>zip</Form.Label>
                                            <Form.Control
                                                name='zip'
                                                placeholder='123'
                                                className='rounded-0'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='block-header bg-light'>
                        <b
                            className='text-uppercase cursor-pointer'
                            onClick={() => change('paypal')}
                        >
                            paypal
                        </b>
                    </div>
                    <div
                        className={`t3 ${
                            payment === 'paypal' ? 'overflow-hidden h152' : 'overflow-hidden h-0'
                        }`}
                    >
                        <div className='block-header d-flex py-5 align-items-center'>
                            <input type='radio' name='payment' id={'option0'} />
                            <label className='ms-3' htmlFor={'option0'}>
                                <b className='text-uppercase d-block mb-2'>pay with paypal</b>
                                <span className='text-muted text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='block-header bg-light'>
                        <b className='text-uppercase cursor-pointer' onClick={() => change('pay')}>
                            pay on delivery
                        </b>
                    </div>
                    <div
                        className={`t3 ${
                            payment === 'pay' ? 'overflow-hidden h152' : 'overflow-hidden h-0'
                        }`}
                    >
                        <div className='block-header d-flex py-5 align-items-center'>
                            <input type='radio' name='payment' id={'option1'} />
                            <label className='ms-3' htmlFor={'option1'}>
                                <b className='text-uppercase d-block mb-2'>pay on delivery</b>
                                <span className='text-muted text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-column flex-lg-row text-uppercase last'>
                <Link to='/checkout/address' className='btn btn-link text-muted rounded-0'>
                    <i className='fa fa-chevron-left pe-2' />
                    back to the address
                </Link>
                <div className='btn btn-dark rounded-0 cursor-pointer' onClick={done}>
                    choose payment method
                    <i className='fa fa-chevron-right ps-2' />
                </div>
            </div>
        </div>
    )
}

export const Order = () => {
    const items = [
        {
            id: 1,
            img: 'https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-ian-dooley-347968-unsplash.jpg',
            name: 'skull tee',
            size: 'large',
            color: 'green',
            price: 65,
            qty1: 4,
            total: 260,
        },
        {
            id: 2,
            img: 'https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-serrah-galos-494312-unsplash.jpg',
            name: 'transparent blouse',
            size: 'medium',
            color: '',
            price: 65,
            qty1: 3,
            total: 260,
        },
        {
            id: 3,
            img: 'https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-serrah-galos-494312-unsplash.jpg',
            name: 'white tee',
            size: 'medium',
            color: 'red',
            price: 55,
            qty1: 3,
            total: 260,
        },
    ]

    return (
        <div id='order' className='mb-5'>
            <div>
                <div className='cart-header text-center text-uppercase fw-bold'>
                    <Row>
                        <Col className='col-6'>item</Col>
                        <Col className='col-2'>price</Col>
                        <Col className='col-2'>quantity</Col>
                        <Col className='col-2'>total</Col>
                    </Row>
                </div>
                <div className='cart-body'>
                    {items.map(item => (
                        <OrderItems item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className='my-5 d-flex justify-content-between flex-column flex-lg-row text-uppercase last'>
                <Link to='/' className='btn btn-link text-muted rounded-0'>
                    <i className='fa fa-chevron-left pe-2' />
                    back to the delivery method
                </Link>
                <Link to='/confirmed' className='btn btn-dark rounded-0'>
                    place an order
                    <i className='fa fa-chevron-right ps-2' />
                </Link>
            </div>
        </div>
    )
}

export const OrderItems = ({ item }) => {
    let [qty, setQty] = useState(item.qty1)
    let [price, setPrice] = useState(item.price * qty)

    return (
        <div className='py-4 border-bottom'>
            <Row className='align-items-center text-center'>
                <Col className='col-6'>
                    <div className='d-flex align-items-center'>
                        <Link to='/'>
                            <img src={item.img} alt='rasm' className='cart-item-img' />
                        </Link>
                        <div className='ms-3 text-start text-muted text-sm'>
                            <Link to='/' className='text-uppercase text-dark'>
                                <b>{item.name}</b>
                            </Link>
                            {item.size ? (
                                <>
                                    <br />
                                    <span className='text-capitalize'>size: {item.size}</span>
                                </>
                            ) : null}
                            {item.color ? (
                                <>
                                    <br />
                                    <span className='text-capitalize'>Colour: {item.color}</span>
                                </>
                            ) : null}
                        </div>
                    </div>
                </Col>
                <Col className='col-2 text-muted'>${item.price.toFixed(2)}</Col>
                <Col className='col-2 text-muted'>{item.qty1}</Col>
                <Col className='col-2 text-muted'>${price.toFixed(2)}</Col>
            </Row>
        </div>
    )
}
