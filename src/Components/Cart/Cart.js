import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from './../Breadcrumbs'
import './Cart.scss'

export const Header = () => {
    return (
        <div id='header'>
            <Breadcrumbs title1='Shopping cart' center className='mb-4' />
            <div className='pb-5 text-center'>
                <h1 className='text-uppercase hero-heding mb-4 display-3'>Shopping cart</h1>
                <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                        <p className='lead text-muted'>you have 3 items in your shopping cart</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export const Tables = () => {
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
        <Col lg='8' id='tables'>
            <div>
                <div className='cart-header text-center text-uppercase fw-bold'>
                    <Row>
                        <Col className='col-5'>item</Col>
                        <Col className='col-2'>price</Col>
                        <Col className='col-2'>quantity</Col>
                        <Col className='col-2'>total</Col>
                        <Col className='col-1'></Col>
                    </Row>
                </div>
                <div className='cart-body'>
                    {items.map(item => (
                        <Items item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className='my-5 d-flex justify-content-between flex-column flex-lg-row text-uppercase last'>
                <Link to='/' className='btn btn-link text-muted rounded-0'>
                    <i className='fa fa-chevron-left pe-2' />
                    continue shopping
                </Link>
                <Link to='/' className='btn btn-dark rounded-0'>
                    proceed to checkout
                    <i className='fa fa-chevron-right ps-2' />
                </Link>
            </div>
        </Col>
    )
}

export const Items = ({ item }) => {
    let [qty, setQty] = useState(item.qty1)
    let [price, setPrice] = useState(item.price * qty)

    const minus = e => {
        e.preventDefault()
        if (qty > 0) {
            setQty(--qty)
        } else {
            setQty(0)
        }

        setPrice(item.price * qty)
    }

    const plus = e => {
        e.preventDefault()
        setQty(++qty)

        setPrice(item.price * qty)
    }

    return (
        <div className='py-4 border-bottom'>
            <Row className='align-items-center text-center'>
                <Col className='col-5'>
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
                <Col className='col-2'>
                    <div className='d-flex align-items-center'>
                        <div className='p-1 cursor-pointer' onClick={minus}>
                            -
                        </div>
                        <input
                            className='form-control text-center input-items rounded-0'
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                        <div className='p-1 cursor-pointer' onClick={plus}>
                            +
                        </div>
                    </div>
                </Col>
                <Col className='col-2 text-muted'>${price.toFixed(2)}</Col>
                <Col className='col-1'>
                    <i className='fa fa-times cursor-pointer' />
                </Col>
            </Row>
        </div>
    )
}
