import React, { useCallback, useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Badge, Card, Col, Form, FormLabel, Row, Button } from 'react-bootstrap'
import { Breadcrumbs } from './../Breadcrumbs'
import './Category.scss'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
    return (
        <div id='header'>
            <Breadcrumbs title1='Jackets and tops' center />
            <div className='pb-5 text-center'>
                <h1 className='text-uppercase my-4 display-3 p-bold hero-heading'>jackets and tops</h1>
                <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                        <p className='text-muted lead'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(40)
    const [maxVal, setMaxVal] = useState(110)
    const minValRef = useRef(null)
    const maxValRef = useRef(null)
    const range = useRef(null)

    // Convert to percentage
    const getPercent = useCallback(
        value => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    )

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal)
            const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [minVal, getPercent])

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value)
            const maxPercent = getPercent(maxVal)

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [maxVal, getPercent])

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal })
    }, [minVal, maxVal, onChange])

    return (
        <div id='multiSlider' className='position-relative px-3 px-lg-0 me-lg-4'>
            <input
                type='range'
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={event => {
                    const value = Math.min(+event.target.value, maxVal - 1)
                    setMinVal(value)
                    event.target.value = value.toString()
                }}
                className={classnames('thumb thumb--zindex-3', {
                    'thumb--zindex-5': minVal > max - 100,
                })}
            />
            <input
                type='range'
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={event => {
                    const value = Math.max(+event.target.value, minVal + 1)
                    setMaxVal(value)
                    event.target.value = value.toString()
                }}
                className='thumb thumb--zindex-4'
            />

            <div className='slider'>
                <div className='slider__track' />
                <div ref={range} className='slider__range' />
                <div className='d-flex justify-content-between py-3 text-sm'>
                    <div className='slider__left-value'>From ${minVal}.00</div>
                    <div className='slider__right-value'>To ${maxVal}.00</div>
                </div>
            </div>
        </div>
    )
}

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export const Filter = () => {
    const [jacket, setJacket] = useState(false)
    const [jeans, setJeans] = useState(false)
    const [acces, setAcces] = useState(false)
    const [calvin, setCalvin] = useState(true)
    const [levi, setLevi] = useState(true)
    const [hugo, setHugo] = useState(false)
    const [tomi, setTomi] = useState(false)
    const [tom, setTom] = useState(false)
    const [radio, setRadio] = useState('')
    const [color, setColor] = useState('')

    console.log(calvin, levi, hugo, tom, tomi)
    console.log(radio, color)

    return (
        <Col xl='3' lg={{ span: 4, order: 1 }} id='filter'>
            <div className='sidebar-block px-3 px-lg-0 me-lg-4 mb-4'>
                {[
                    {
                        name: 'Jackets',
                        badge: 123,
                        state1: jacket,
                        state2: setJacket,
                    },
                    {
                        name: 'Jeans & chinos',
                        badge: 55,
                        state1: jeans,
                        state2: setJeans,
                    },
                    {
                        name: 'Accessories',
                        badge: 80,
                        state1: acces,
                        state2: setAcces,
                    },
                ].map(accardion => (
                    <div key={accardion.name} className='mb-2'>
                        <div
                            className={`d-flex justify-content-between py-2 px-3 p-bold ${
                                accardion.state1 ? 'bg-gray-200' : ''
                            }`}
                            onClick={() => accardion.state2(!accardion.state1)}
                        >
                            <div>
                                <span>{accardion.name}</span>
                                <Badge bg='dark' className='ms-2'>
                                    {accardion.badge}
                                </Badge>
                            </div>
                            <div>
                                <i
                                    className={`fas fa-angle-right t03 ${
                                        accardion.state1 ? 'rotate-90' : ''
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden t03 ${accardion.state1 ? 'h-192' : 'h-0'}`}
                        >
                            <ul className='list-unstyled ms-3'>
                                <li className='nav-link my-1 c-343a40'>Lorem ipsum</li>
                                <li className='nav-link my-1 c-343a40'>Lorem ipsum</li>
                                <li className='nav-link my-1 c-343a40'>Lorem ipsum</li>
                                <li className='nav-link my-1 c-343a40'>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-bottom my-4' />
            <div>
                <h6 className='text-uppercase d-lg-block p-regular c-868e96'>price</h6>
                <MultiRangeSlider
                    min={0}
                    max={250}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
            <div className='border-bottom my-4' />
            <div>
                <h6 className='text-uppercase d-lg-block p-regular c-868e96 mb-3'>brands</h6>
                <Form>
                    <Form.Group className='mb-3' controlId='calvin'>
                        <Form.Check
                            type='checkbox'
                            label='Calvin Klein (18)'
                            defaultChecked={calvin}
                            onClick={() => setCalvin(!calvin)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='levi'>
                        <Form.Check
                            type='checkbox'
                            label='Levi strauss (30)'
                            defaultChecked={levi}
                            onClick={() => setLevi(!levi)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='hugo'>
                        <Form.Check
                            type='checkbox'
                            label='Hugo Boss (120)'
                            defaultChecked={hugo}
                            onClick={() => setHugo(!hugo)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='tomi'>
                        <Form.Check
                            type='checkbox'
                            label='Tomi Hilfiger (70)'
                            defaultChecked={tomi}
                            onClick={() => setTomi(!tomi)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='tom'>
                        <Form.Check
                            type='checkbox'
                            label='Tom Ford (110)'
                            defaultChecked={tom}
                            onClick={() => setTom(!tom)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='border-bottom my-4' />
            <div>
                <h6 className='text-uppercase d-lg-block p-regular c-868e96 mb-3'>size</h6>
                <Form>
                    <Form.Group className='mb-3' controlId='small'>
                        <Form.Check
                            type='radio'
                            label='Small'
                            name='size'
                            value='small'
                            onChange={e => setRadio(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='medium'>
                        <Form.Check
                            type='radio'
                            label='Medium'
                            name='size'
                            value='medium'
                            onChange={e => setRadio(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='large'>
                        <Form.Check
                            type='radio'
                            label='Large'
                            name='size'
                            value='large'
                            onChange={e => setRadio(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='xlarge'>
                        <Form.Check
                            type='radio'
                            label='X-Large'
                            name='size'
                            value='xlarge'
                            onChange={e => setRadio(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='border-bottom my-4' />
            <div className='d-flex'>
                <ul className='list-inline mb-0 position-relative'>
                    {['#668cb9', '#fff', '#8b6ea4', '#dd6265'].map(color1 => (
                        <li className='list-inline-item' key={color1}>
                            <FormLabel
                                className={`btn-colour ${color === color1 ? 'active' : ''}`}
                                htmlFor={color1}
                                style={{ backgroundColor: color1 }}
                            />
                            <input
                                className='input-invisible'
                                type='radio'
                                name='color'
                                value={color1}
                                onClick={() => setColor(color1)}
                                id={color1}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Col>
    )
}

export const Product = () => {
    const [show, setShow] = useState(12)
    const [sort, setSort] = useState('default')

    console.log(show, sort)
    const location = useLocation()
    let number = []
    for (let i = 1; i < 6; i++) number.push(i)

    const products = [
        {
            id: 1,
            img: '/images/image10.jpg',
            name1: 'Jackets',
            name2: 'white tee',
            price: '$40.00',
            fresh: true,
            sale: false,
            sold: false,
        },
        {
            id: 2,
            img: '/images/image10.jpg',
            name1: 'Denim',
            name2: 'BLACK BLOUSE',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 3,
            img: '/images/image10.jpg',
            name1: 'Accessories',
            name2: 'COLLEGE JACKET',
            price: '$40.00',
            fresh: false,
            sale: true,
            sold: false,
        },
        {
            id: 4,
            img: '/images/image10.jpg',
            name1: 'Denim',
            name2: 'Carrot-fit jeans',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 5,
            img: '/images/image10.jpg',
            name1: 'Jackets',
            name2: 'STRIPED T-SHIRT',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 6,
            img: '/images/image10.jpg',
            name1: 'Shirts',
            name2: 'SHORT TOP',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 7,
            img: '/images/image10.jpg',
            name1: 'Sweaters',
            name2: 'ETHNIC SWEATER',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: true,
        },
        {
            id: 8,
            img: '/images/image10.jpg',
            name1: 'Coats',
            name2: 'BEIGE',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 9,
            img: '/images/image10.jpg',
            name1: 'T-Shirts',
            name2: 'SKULL TEE',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 10,
            img: '/images/image10.jpg',
            name1: 'Denim',
            name2: 'TRUCKER JACKET',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 11,
            img: '/images/image10.jpg',
            name1: 'Denim',
            name2: 'BLOUSE',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
        {
            id: 12,
            img: '/images/image10.jpg',
            name1: 'Denim',
            name2: 'SHIRT',
            price: '$40.00',
            fresh: false,
            sale: false,
            sold: false,
        },
    ]

    return (
        <Col id='product' xl='9' lg={{ span: 8, order: 2 }}>
            <div className='product-grid-header'>
                <div className='me-3 mb-3'>
                    Showing <b className='text-dark'>1-12</b> of <b className='text-dark'>158</b>{' '}
                    products
                </div>
                <div className='me-3 mb-3 text-gray-700'>
                    <span className='c-868e96 me-3'>Show</span>
                    {[12, 24, 'all'].map(show1 => (
                        <span
                            key={show1}
                            onClick={() => setShow(show1)}
                            className={`me-3 cursor-pointer ${
                                show === show1 ? 'border-bottom border-2 border-dark' : ''
                            }`}
                        >
                            {show1 === 'all' ? 'All' : show1}
                        </span>
                    ))}
                </div>
                <div className='mb-3 d-flex align-items-center'>
                    <span className='d-inline-block me-2'>Sort by</span>
                    <Form.Select
                        className='w-auto border-0 rounded-0'
                        onChange={e => setSort(e.target.value)}
                    >
                        <option value='default'>Default</option>
                        <option value='popularity'>Popularity</option>
                        <option value='rating'>Rating</option>
                        <option value='newest'>Newest first</option>
                    </Form.Select>
                </div>
            </div>
            <Row>
                {products.map(product => (
                    <Col xl='4' className='col-6' key={product.id}>
                        <Card className='border-0 position-relative h-100 mb-4'>
                            {product.fresh ? (
                                <div className={`ribbon ribbon-info text-uppercase l--11`}>
                                    fresh
                                </div>
                            ) : (
                                ''
                            )}
                            {product.sale ? (
                                <div className={`ribbon ribbon-primary text-uppercase l--11`}>
                                    sale
                                </div>
                            ) : (
                                ''
                            )}
                            {product.sold ? (
                                <div className={`ribbon ribbon-danger text-uppercase l--11`}>
                                    sold out
                                </div>
                            ) : (
                                ''
                            )}
                            <div className='position-relative overflow-hidden'>
                                <Card.Img
                                    variant='top'
                                    src={product.img}
                                    className='border-bottom border-dark'
                                />
                                <div className='position-absolute top-0 start-0 end-0 bottom-0 product-hover-overlay d-flex justify-content-center align-items-center opacity-0'>
                                    <Link
                                        to='/shop'
                                        className='position-absolute top-0 start-0 end-0 bottom-0'
                                    ></Link>
                                    <div>
                                        <Link
                                            to='/cate'
                                            className='btn btn-outline-dark d-none d-sm-inline-block btn-product-left rounded-0'
                                        >
                                            <i className='fa fa-shopping-cart' />
                                        </Link>
                                        <Button
                                            variant='dark'
                                            className='fs-xl-12 py-2 px-lg-4 rounded-0'
                                        >
                                            <i className='fa fa-search' />
                                            <span className='ms-2'>VIEW</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className='px-0 py-2'>
                                <Card.Text className='mb-0 text-muted text-sm'>
                                    {product.name1}
                                </Card.Text>
                                <Card.Title className='text-uppercase mb-0 h6'>
                                    <Link to='/shop' className='text-dark'>
                                        {product.name2}
                                    </Link>
                                </Card.Title>
                                <Card.Text className='text-muted'>{product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className='d-flex justify-content-center mb-5 mt-3 pag text-uppercase'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <Link to='/category/1' className={`page-link rounded-0`}>
                            prev
                        </Link>
                    </li>
                    {number.map(num => (
                        <li className='page-item' key={num}>
                            <Link
                                to={`/category/${num}`}
                                className={`page-link ${
                                    location.pathname === `/category/${num}`
                                        ? 'bg-dark border-dark text-white'
                                        : ''
                                }`}
                            >
                                {num}
                            </Link>
                        </li>
                    ))}
                    <li className='page-item'>
                        <Link
                            to='/category/6'
                            className={`page-link rounded-0 ${
                                location.pathname === '/category/6'
                                    ? 'bg-dark border-dark text-white'
                                    : ''
                            }`}
                        >
                            next
                        </Link>
                    </li>
                </ul>
            </div>
        </Col>
    )
}
