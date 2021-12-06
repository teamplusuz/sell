import { useState } from 'react'
import { Col, Container, Row, Form, FormLabel, Button, Nav, Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Breadcrumbs } from '../Breadcrumbs'
import './Shop.scss'

SwiperCore.use([Pagination, Navigation])

export const Carousel = () => {
    const [size, setSize] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [items, setItems] = useState(1)
    const [showSize, setShowSize] = useState(false)
    const [showType, setShowType] = useState(false)
    const [showColor, setShowColor] = useState(false)
    const [showItems, setShowItems] = useState(false)

    const images = [
        {
            id: 1,
            img: '/images/image2.jpg',
        },
        {
            id: 2,
            img: '/images/image7.jpg',
        },
        {
            id: 3,
            img: '/images/image8.jpg',
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class='${className}'>
                    <img src='${images[index].img}' />
                </span>`
        },
    }

    const addCart = e => {
        e.preventDefault()

        if (size.length === 0) setShowSize(true)
        else setShowSize(false)

        if (type.length === 0) setShowType(true)
        else setShowType(false)

        if (color.length === 0) setShowColor(true)
        else setShowColor(false)

        if (items <= 0) setShowItems(true)
        else setShowItems(false)

        if (size.length !== 0 && type.length !== 0 && color !== 0 && items > 0) {
            setSize('')
            setType('')
            setColor('')
            setItems(1)
            console.log('success')
        }
    }

    return (
        <div id='carousel' className='py-5'>
            <Container>
                <Row>
                    <Col lg={{ span: 7, order: 1 }} className='position-relative order-2'>
                        <Row>
                            <Col md={{ span: 10, offset: 2 }} className='px-4'>
                                <Swiper
                                    className='mySwiper bg-dark text-white'
                                    loop={true}
                                    pagination={pagination}
                                >
                                    <div className='ribbon ribbon-info l-lg-19'>fresh</div>
                                    <div className='ribbon ribbon-primary l-lg-19'>sale</div>
                                    {images.map(image => (
                                        <SwiperSlide key={image.id}>
                                            <div className='w-100 d-flex justify-content-center'>
                                                <img src={image.img} alt='rasm' className='w-100' />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{ span: 5, order: 2 }} className='order-1'>
                        <div className='pt-lg-2 pb-lg-4'>
                            <Breadcrumbs
                                title1='Tops and Jackets'
                                title2='Modern Jacket'
                                link1='/category'
                            />
                        </div>
                        <h1 className='mb-4 fs-xl-64 p-bold'>Modern Jacket</h1>
                        <div className='d-flex flex-colum flex-sm-row align-items-sm-center justify-content-sm-between mb-4'>
                            <ul className='list-inline mb-2 mb-sm-0'>
                                <li className='list-inline-item h4 fw-light mb-0'>$65.00</li>
                                <li className='list-inline-item text-muted fw-light'>
                                    <del className='fs-xl-14'>$90.00</del>
                                </li>
                            </ul>
                            <div className='d-flex align-items-center'>
                                <ul className='list-inline me-2 mb-0'>
                                    <li className='list-inline-item me-0'>
                                        <i className='fa fa-star text-primary' />
                                    </li>
                                    <li className='list-inline-item me-0'>
                                        <i className='fa fa-star text-primary' />
                                    </li>
                                    <li className='list-inline-item me-0'>
                                        <i className='fa fa-star text-primary' />
                                    </li>
                                    <li className='list-inline-item me-0'>
                                        <i className='fa fa-star text-primary' />
                                    </li>
                                    <li className='list-inline-item me-0'>
                                        <i className='fa fa-star text-gray-300' />
                                    </li>
                                </ul>
                                <span className='text-muted text-uppercase text-sm fs-xl-14'>
                                    {' '}
                                    25 reviews
                                </span>
                            </div>
                        </div>
                        <p className='mb-4 text-muted'>
                            Est id eiusmod tempor culpa eu magna minim ipsum. Occaecat nostrud nulla
                            ut duis mollit occaecat duis cillum et anim occaecat cupidatat do velit.
                        </p>
                        <Form>
                            <Row>
                                <Col sm='6' lg='12' className='mb-3'>
                                    <h6 className='detail-option-heading position-relative'>
                                        Size
                                        <span className='fs-xl-12 text-gray-500 text-lowercase ms-2 p-regular'>
                                            (required)
                                        </span>
                                    </h6>
                                    {['small', 'medium', 'large'].map(size1 => (
                                        <FormLabel
                                            className={`btn btn-sm btn-outline-secondary position-relative text-uppercase rounded-0 me-2 ${
                                                size1 === size ? 'active' : ''
                                            }`}
                                            htmlFor={size1}
                                            key={size1}
                                        >
                                            {size1}
                                            <input
                                                className='input-invisible'
                                                type='radio'
                                                name='size'
                                                value={size1}
                                                onClick={() => setSize(size1)}
                                                id={size1}
                                                required
                                            />
                                        </FormLabel>
                                    ))}
                                    {showSize ? (
                                        <span className='text-lowercase bg-dark text-white text-nowrap py-1 px-2 p-light rounded tooltipText position-relative ms-3'>
                                            required
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </Col>
                                <Col sm='6' lg='12' className='mb-3'>
                                    <h6 className='detail-option-heading'>
                                        Type
                                        <span className='fs-xl-12 text-gray-500 text-lowercase ms-2 p-regular'>
                                            (required)
                                        </span>
                                    </h6>
                                    {['hoodie', 'college'].map(type1 => (
                                        <FormLabel
                                            className={`btn btn-sm btn-outline-secondary position-relative text-uppercase rounded-0 me-2 ${
                                                type === type1 ? 'active' : ''
                                            }`}
                                            htmlFor={type1}
                                            key={type1}
                                        >
                                            {type1}
                                            <input
                                                className='input-invisible'
                                                type='radio'
                                                name='size'
                                                value={type1}
                                                onClick={() => setType(type1)}
                                                id={type1}
                                                required
                                            />
                                        </FormLabel>
                                    ))}
                                    {showType ? (
                                        <span className='text-lowercase bg-dark text-white text-nowrap py-1 px-2 p-light rounded tooltipText position-relative ms-3'>
                                            required
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </Col>
                                <Col className='col-12 mb-3'>
                                    <h6 className='detail-option-heading'>
                                        color
                                        <span className='fs-xl-12 text-gray-500 text-lowercase ms-2 p-regular'>
                                            (required)
                                        </span>
                                    </h6>
                                    <div className='d-flex'>
                                        <ul className='list-inline mb-0 position-relative'>
                                            {['#668cb9', '#fff', '#8b6ea4', '#dd6265'].map(
                                                color1 => (
                                                    <li className='list-inline-item' key={color1}>
                                                        <FormLabel
                                                            className={`btn-colour ${
                                                                color === color1 ? 'active' : ''
                                                            }`}
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
                                                            required
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        {showColor ? (
                                            <span className='text-lowercase bg-dark text-white text-nowrap py-1 px-2 p-light rounded tooltipText position-relative ms-3'>
                                                required
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </Col>
                                <Col className='col-12 mb-5' lg='6'>
                                    <h6 className='detail-option-heading d-flex'>
                                        items
                                        <span className='fs-xl-12 text-gray-500 text-lowercase ms-2 p-regular'>
                                            (required)
                                        </span>
                                    </h6>
                                    <div className='d-flex'>
                                        <Form.Control
                                            type='number'
                                            value={items}
                                            className='detail-quantity rounded-0'
                                            onChange={e => setItems(e.target.value)}
                                        />
                                        {showItems ? (
                                            <span className='text-lowercase bg-dark text-white text-nowrap py-1 px-2 p-light rounded tooltipText position-relative ms-3'>
                                                kamida 1 bo'lishi kerak
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </Col>
                                <ul className='list-inline'>
                                    <li className='list-inline-item' onClick={addCart}>
                                        <Button
                                            variant='dark'
                                            className='btn-lg mb-1 rounded-0 fs-xl-14 p-4'
                                        >
                                            <i className='fa fa-shopping-cart me-2' />
                                            Add to cart
                                        </Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link
                                            to='/shop'
                                            className='btn btn-outline-secondary mb-1 rounded-0 fs-xl-14'
                                        >
                                            <i className='far fa-heart me-2' />
                                            Add to wishlist
                                        </Link>
                                    </li>
                                </ul>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const GeneralInfo = () => {
    const [changeInfo, setChangeInfo] = useState('desc')

    return (
        <div id='generalinfo' className='my-5'>
            <Container>
                <Nav className='border-bottom mb--1'>
                    {[
                        {
                            id: 1,
                            name: 'description',
                            changeState: 'desc',
                        },
                        {
                            id: 2,
                            name: 'additional information',
                            changeState: 'addinfo',
                        },
                        {
                            id: 3,
                            name: 'reviews',
                            changeState: 'reviews',
                        },
                    ].map(info => (
                        <Nav.Item
                            className={`text-uppercase py-3 px-4 hover-border fs-12 ${
                                changeInfo === info.changeState
                                    ? 'border-bottom border-dark border-2'
                                    : ''
                            }`}
                            onClick={() => setChangeInfo(info.changeState)}
                            key={info.id}
                        >
                            {info.name}
                        </Nav.Item>
                    ))}
                </Nav>
                <div>
                    {changeInfo === 'desc' ? (
                        <Description />
                    ) : changeInfo === 'addinfo' ? (
                        <Additional />
                    ) : changeInfo === 'reviews' ? (
                        <Reviews />
                    ) : (
                        ''
                    )}
                </div>
            </Container>
        </div>
    )
}

export const Description = () => {
    return (
        <div id='desc' className='pt-5'>
            <p className='text-muted'>
                Minim cillum id tempor aliqua ad magna aliqua do sit irure nulla. Veniam consectetur
                tempor ad mollit irure deserunt. Labore mollit consectetur dolor ullamco proident
                amet deserunt aliqua nostrud pariatur.
            </p>
            <p className='text-muted'>
                Minim cillum id tempor aliqua ad magna aliqua do sit irure nulla. Veniam consectetur
                tempor ad mollit irure deserunt. Labore mollit consectetur dolor ullamco proident
                amet deserunt aliqua nostrud pariatur.
            </p>
        </div>
    )
}

export const Additional = () => {
    return (
        <div id='addinfo' className='pt-5'>
            <Row>
                <Col lg='6'>
                    <Table>
                        <tbody className='text-muted fw-normal text-sm'>
                            <tr>
                                <th className='text-uppercase border-0'>product #</th>
                                <td className='border-0'>Consequat aliqua sunt.</td>
                            </tr>
                            {[
                                {
                                    th: 'availible packaging',
                                    td: 'LOLDuis aute irure dolor in reprehenderit',
                                },
                                {
                                    th: 'weight',
                                    td: 'dolor sit amet',
                                },
                                {
                                    th: 'sunt in culpa qui',
                                    td: 'Lorem ipsum dolor sit amet',
                                },
                            ].map(tdth => (
                                <tr key={tdth.th}>
                                    <th className='text-uppercase'>{tdth.th}</th>
                                    <td>{tdth.td}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col lg='6'>
                    <Table>
                        <tbody className='text-muted fw-normal text-sm'>
                            <tr>
                                <th className='text-uppercase border-0'>weight</th>
                                <td className='border-0'>dolor sit amet</td>
                            </tr>
                            {[
                                {
                                    th: 'sunt in culpa qui',
                                    td: 'Lorem ipsum dolor sit amet',
                                },
                                {
                                    th: 'product #',
                                    td: 'Consequat aliqua sunt.',
                                },
                                {
                                    th: 'availible packaging',
                                    td: 'LOLDuis aute irure dolor in reprehenderit',
                                },
                            ].map(tdth => (
                                <tr key={tdth.th}>
                                    <th className='text-uppercase'>{tdth.th}</th>
                                    <td>{tdth.td}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: '/images/person1.jpg',
            data: 'dec 2018',
            name: 'ham solo',
            star: 5,
            text: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections`,
        },
        {
            id: 2,
            img: '/images/person2.jpg',
            data: 'dec 2018',
            name: 'luke skywalker',
            star: 4,
            text: `The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.`,
        },
        {
            id: 3,
            img: '/images/person3.jpg',
            data: 'dec 2018',
            name: 'princess leia',
            star: 3,
            text: `His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.`,
        },
        {
            id: 4,
            img: '/images/person4.jpg',
            data: 'dec 2018',
            name: 'jabba hut',
            star: 5,
            text: `Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.`,
        },
    ]

    return (
        <div id='reviews' className='pt-5'>
            <Row className='mb-5'>
                <Col lg='10' xl='9'>
                    {reviews.map(review => (
                        <div className='review px-3 d-flex' key={review.id}>
                            <div className='flex-shrink-0 text-center me-4 me-xl-5'>
                                <img
                                    className='review-image rounded-circle d-block'
                                    src={review.img}
                                    alt='person'
                                />
                                <span className='text-uppercase text-muted'>{review.data}</span>
                            </div>
                            <div>
                                <h5 className='mt-2 mb-1 text-capitalize'>{review.name}</h5>
                                <div className='mb-2'>
                                    {[...new Array(Number(review.star))].map((ind, index) => (
                                        <i className='fa fa-xs fa-star text-warning' key={index} />
                                    ))}
                                    {[...new Array(5 - Number(review.star))].map((ind, index) => (
                                        <i className='fa fa-xs fa-star text-gray-200' key={index} />
                                    ))}
                                </div>
                                <p className='text-muted'>{review.text}</p>
                            </div>
                        </div>
                    ))}
                    <Post />
                </Col>
            </Row>
        </div>
    )
}

export const Post = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(5)
    const [name1, setName1] = useState(false)
    const [email1, setEmail1] = useState(false)
    const [text1, setText1] = useState(false)

    const post = e => {
        e.preventDefault()

        if (name.length === 0) setName1(true)
        else setName1(false)

        if (email.length === 0) setEmail1(true)
        else setName1(false)

        if (text.length === 0) setText1(true)
        else setName1(false)

        if (name.length !== 0 && email.length !== 0 && text.length !== 0) {
            console.log('success')
        }
    }

    return (
        <div id='post' className='py-5 px-3'>
            <h5 className='text-uppercase mb-4'>Leave a review</h5>
            <Form>
                <Row className='mb-4'>
                    <Col sm='6' className='mb-4'>
                        <Form.Group>
                            <Form.Label htmlFor='name' className='text-uppercase fs-xl-12'>
                                your name *
                            </Form.Label>
                            <Form.Control
                                name='name'
                                id='name'
                                placeholder='Enter your name'
                                className={`rounded-0 ${name1 ? 'border-danger' : ''}`}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm='6'>
                        <div className='mb-4 d-md-flex'>
                            <Form.Label htmlFor='rating' className='text-uppercase fs-xl-12'>
                                your rating *
                            </Form.Label>
                            <Form.Select
                                id='rating'
                                name='rating'
                                className='focus-shadow-0 fs-xl-14 mx-md-3'
                                style={{ maxWidth: '170px' }}
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            >
                                <option value='5'>★★★★★ (5/5)</option>
                                <option value='4'>★★★★☆ (4/5)</option>
                                <option value='3'>★★★☆☆ (3/5)</option>
                                <option value='2'>★★☆☆☆ (2/5)</option>
                                <option value='1'>★☆☆☆☆ (1/5) </option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <div className='mb-4'>
                    <Form.Group>
                        <Form.Label htmlFor='email' className='text-uppercase fs-xl-12'>
                            your email *
                        </Form.Label>
                        <Form.Control
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            className={`rounded-0 ${email1 ? 'border-danger' : ''}`}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className='mb-4'>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='review' className='text-uppercase fs-xl-12'>
                            review text *
                        </Form.Label>
                        <Form.Control
                            as='textarea'
                            id='review'
                            name='review'
                            placeholder='Enter your review'
                            className={`rounded-0 ${text1 ? 'border-danger' : ''}`}
                            rows={4}
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <Button variant='outline-dark' className='text-uppercase rounded-0' onClick={post}>
                    post review
                </Button>
            </Form>
        </div>
    )
}

export const Like = () => {
    const cards = [
        {
            id: 1,
            img: '/images/image10.jpg',
            text1: 'Jackets',
            text2: 'striped t-shirt',
            text3: '$40.00',
            fresh: true,
        },
        {
            id: 2,
            img: '/images/image8.jpg',
            text1: 'Shirt',
            text2: 'short top',
            text3: '$40.00',
        },
        {
            id: 3,
            img: '/images/image11.jpg',
            text1: 'Sweaters',
            text2: 'ethnic sweater',
            text3: '$40.00',
            sale: true,
        },
        {
            id: 4,
            img: '/images/image7.jpg',
            text1: 'Coats',
            text2: 'beige',
            text3: '$40.00',
        },
        {
            id: 5,
            img: '/images/image8.jpg',
            text1: 'Shirt',
            text2: 'skull tee',
            text3: '$40.00',
        },
        {
            id: 6,
            img: '/images/image2.jpg',
            text1: 'Shirt',
            text2: 'trucker jacker',
            text3: '$40.00',
        },
    ]

    return (
        <div id='like' className='my-5'>
            <Container>
                <header className='text-center'>
                    <h6 className='mb-5 text-uppercase'>you might also like</h6>
                </header>
                <Row>
                    {cards.map(card => (
                        <Col lg='2' md='4' className='col-6' key={card.id}>
                            <Card className='border-0 position-relative'>
                                {card.fresh || card.sale ? (
                                    <div
                                        className={`ribbon ${
                                            card.fresh ? 'ribbon-info' : 'ribbon-primary'
                                        } text-uppercase l--11`}
                                    >
                                        {card.fresh ? 'fresh' : 'sale'}
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div className='position-relative'>
                                    <Card.Img
                                        variant='top'
                                        src={card.img}
                                        className='border-bottom border-dark borbsize'
                                    />
                                    <Link
                                        to='/shop'
                                        className='position-absolute top-0 start-0 end-0 bottom-0 product-hover-overlay d-flex justify-content-center align-items-center opacity-0'
                                    >
                                        <Button
                                            variant='dark'
                                            className='fs-xl-12 py-2 px-lg-4 rounded-0'
                                        >
                                            <i className='fa fa-search' />
                                            <span className='ms-2'>VIEW</span>
                                        </Button>
                                    </Link>
                                </div>
                                <Card.Body>
                                    <Card.Text className='mb-0 text-muted text-sm'>
                                        {card.text1}
                                    </Card.Text>
                                    <Card.Title className='text-uppercase mb-0 h6'>
                                        <Link to='/shop' className='text-dark'>
                                            {card.text2}
                                        </Link>
                                    </Card.Title>
                                    <Card.Text className='text-muted'>{card.text3}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
