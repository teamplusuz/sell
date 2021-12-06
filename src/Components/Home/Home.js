import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Text from './../Text'
import './Home.scss'
SwiperCore.use([Autoplay, Pagination, Navigation])

export const Header = () => {
    const slider = [
        {
            id: 1,
            img: '/images/slider1.jpg',
        },
        {
            id: 2,
            img: '/images/slider2.jpg',
        },
        {
            id: 3,
            img: '/images/slider3.jpg',
        },
    ]
    return (
        <div id='swiper' className='bg-light'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                className='mySwiper'
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
            >
                {slider.map(slid => (
                    <SwiperSlide
                        key={slid.id}
                        style={{
                            background: `center center url(${slid.img}) no-repeat`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <Container className='py-6'>
                            <Row>
                                <Col lg='8' xl='6' className='mx-auto text-white text-center'>
                                    <h5 className='text-uppercase fw-light mb-4 letter-spacing-5'>
                                        Just arrived
                                    </h5>
                                    <h1 className='mb-5 display-5 fw-bold'>Denim Jackets</h1>
                                    <p className='lead mb-4'>
                                        Irure consectetur amet labore fugiat aute sint aliqua
                                        adipisicing proident in nisi nostrud laborum incididunt.
                                    </p>
                                    <Link to='/' className='btn btn-light text-uppercase'>
                                        view collection
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export const Pick = () => {
    return (
        <div id='pick'>
            <Container className='text-center'>
                <Text
                    title={'our picks for winter 2018'}
                    subtitle={`Pariatur sit commodo laboris duis magna ad cupidatat magna sunt id
                            tempor occaecat eu deserunt. Occaecat irure minim commodo irure esse
                            dolore non officia.`}
                />
                <Row>
                    <Col lg='4' className='p-3'>
                        <div
                            className='h-100 w-100 d-flex align-items-center position-relative h-462'
                            style={{
                                background: `center center url('/images/image13.jpg') no-repeat`,
                                backgroundSize: 'cover',
                            }}
                        >
                            <Link
                                to='/'
                                className='position-absolute top-0 bottom-0 start-0 end-0'
                            />
                            <div className='w-100 text-white'>
                                <h1 className='text-uppercase'>Men</h1>
                                <p className='lead'>
                                    Irure officia officia voluptate exercitation ullamco.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='8'>
                        <Row>
                            <Col lg='12' className='p-3'>
                                <div
                                    className='w-100 position-relative d-flex align-items-center h-462'
                                    style={{
                                        background: `center center url('/images/image14.jpg') no-repeat`,
                                        backgroundSize: 'cover',
                                        height: '570px',
                                    }}
                                >
                                    <Link
                                        to='/'
                                        className='position-absolute top-0 bottom-0 start-0 end-0'
                                    />
                                    <div className='w-100 align-items-stretch'>
                                        <h1 className='text-uppercase'>ledies</h1>
                                        <p className='lead'>
                                            Irure officia officia voluptate exercitation ullamco.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' className='p-3'>
                                <div
                                    className='w-100 position-relative d-flex align-items-center h-462'
                                    style={{
                                        background: `center center url('/images/image15.jpg') no-repeat`,
                                        backgroundSize: 'cover',
                                        height: '180px',
                                    }}
                                >
                                    <Link
                                        to='/'
                                        className='position-absolute top-0 bottom-0 start-0 end-0'
                                    />
                                    <div className='w-100 text-white align-items-stretch'>
                                        <h1 className='text-uppercase'>denim</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' className='p-3'>
                                <div
                                    className='h-100 w-100 position-relative d-flex align-items-center h-462'
                                    style={{
                                        background: `center center url('/images/image16.jpg') no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <Link
                                        to='/'
                                        className='position-absolute top-0 bottom-0 start-0 end-0'
                                    />
                                    <div className='w-100 text-white align-items-stretch'>
                                        <h1 className='text-uppercase'>accessories</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' className='p-3'>
                                <div
                                    className='h-100 w-100 position-relative d-flex align-items-center h-462'
                                    style={{
                                        background: `center center url('/images/image17.jpg') no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <Link
                                        to='/'
                                        className='position-absolute top-0 bottom-0 start-0 end-0'
                                    />
                                    <div className='w-100 text-white'>
                                        <h1 className='text-uppercase'>sales</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const Favourites = () => {
    const cards = [
        {
            id: 1,
            img: '/images/image10.jpg',
            text1: 'Jackets',
            text2: 'striped t-shirt',
            text3: '$40.00',
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
            have: true,
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
        {
            id: 7,
            img: '/images/image3.jpg',
            text1: 'Denim',
            text2: 'blouse',
            text3: '$40.00',
        },
        {
            id: 8,
            img: '/images/image8.jpg',
            text1: 'Denim',
            text2: 'shirt',
            text3: '$40.00',
        },
    ]

    return (
        <div id='favourites' className='py-lg-5 bg-light'>
            <Container>
                <Text
                    title='your favourites'
                    subtitle='Sit tempor et dolor sint elit nulla esse duis dolor. Voluptate laborum labore duis sit minim nisi ad.'
                />
                <Row>
                    <Col md='12'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 2,
                                },
                                991: {
                                    slidesPerView: 5,
                                },
                            }}
                            className='mySwiper py-lg-5 pb-5'
                        >
                            {cards.map(card => (
                                <SwiperSlide key={card.id}>
                                    <Card className='border-0'>
                                        {card.have ? (
                                            <div className='ribbon ribbon-danger text-uppercase'>
                                                sold out
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
                                            <Card.Text className='text-muted'>
                                                {card.text3}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const Journal = () => {
    const journals = [
        {
            id: 1,
            img: '/images/image12.jpg',
            text1: 'fashion and style',
            text2: 'Pellentesque habitant morbi',
            text3: 'Tempor non officia dolor irure laborum mollit ut ullamco et laborum. Cupidatat mollit nulla labore elit enim duis magna laboris elit velit irure tempor deserunt. Non id voluptate elit fugiat. Exercitation qui officia esse culpa cupidatat.',
            data: 'January 16, 2016',
            url: '/',
        },
        {
            id: 2,
            img: 'https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/marion-michele-330691-unsplash.jpg',
            text1: 'fashion and style',
            text2: 'Pellentesque habitant morbi',
            text3: 'Tempor non officia dolor irure laborum mollit ut ullamco et laborum. Cupidatat mollit nulla labore elit enim duis magna laboris elit velit irure tempor deserunt. Non id voluptate elit fugiat. Exercitation qui officia esse culpa cupidatat.',
            data: 'January 16, 2016',
            url: '/',
        },
        {
            id: 3,
            img: 'https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-cropped.jpg',
            text1: 'fashion and style',
            text2: 'Pellentesque habitant morbi',
            text3: 'Tempor non officia dolor irure laborum mollit ut ullamco et laborum. Cupidatat mollit nulla labore elit enim duis magna laboris elit velit irure tempor deserunt. Non id voluptate elit fugiat. Exercitation qui officia esse culpa cupidatat.',
            data: 'January 16, 2016',
            url: '/',
        },
    ]

    return (
        <div id='journal' className='py-lg-5'>
            <Container>
                <Text
                    title={'from our journal'}
                    subtitle={
                        'Aliquip mollit do ex exercitation ad culpa irure ipsum veniam voluptate. Cillum dolor tempor commodo ea consectetur dolore sunt elit irure. Id ut minim commodo quis sunt cillum ea in amet.'
                    }
                />
                <Row>
                    {journals.map(journal => (
                        <Col lg='4' key={journal.id} className='col-6 mb-5'>
                            <Card className='border-0'>
                                <Card.Img variant='top' src={journal.img} alt='rasm' />
                                <Card.Body className='mt-3 p-0'>
                                    <Card.Text className='text-uppercase text-muted'>
                                        {journal.text1}
                                    </Card.Text>
                                    <Card.Title className='my-2'>
                                        <Link to={journal.url} className='text-dark'>
                                            {journal.text2}
                                        </Link>
                                    </Card.Title>
                                    <Card.Text className='text-sm text-gray-500'>
                                        <i className='far fa-clock' />
                                        <span className='ms-2'>{journal.data}</span>
                                    </Card.Text>
                                    <Card.Text className='text-muted'>{journal.text3}</Card.Text>
                                    <Link to={journal.url} className='text-gray-700 text-uppercase'>
                                        read more
                                        <i className='fa fa-long-arrow-alt-right ms-2' />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export const Sales = () => {
    return (
        <div
            id='sales'
            className='py-6 my-5 light-overlay position-relative'
            style={{
                background: 'center center url("/images/image18.jpg") no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Container>
                <div className='text-center text-uppercase text-dark position-relative overlay-content'>
                    <p className='p-bold mb-1 letter-spacing-5'>old collection</p>
                    <h3 className='display-1 p-bold text-serif text-capitalize'>summer sales</h3>
                    <Link to='/' className='btn btn-dark rounded-0'>
                        shop now
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export const OurBrends = () => {
    const icons = [
        {
            id: 1,
            svg: '/images/brand-1.svg',
        },
        {
            id: 2,
            svg: '/images/brand-2.svg',
        },
        {
            id: 3,
            svg: '/images/brand-3.svg',
        },
        {
            id: 4,
            svg: '/images/brand-4.svg',
        },
        {
            id: 5,
            svg: '/images/brand-5.svg',
        },
        {
            id: 6,
            svg: '/images/brand-6.svg',
        },
        {
            id: 7,
            svg: '/images/brand-1.svg',
        },
        {
            id: 8,
            svg: '/images/brand-2.svg',
        },
        {
            id: 9,
            svg: '/images/brand-3.svg',
        },
        {
            id: 10,
            svg: '/images/brand-4.svg',
        },
    ]

    return (
        <div id='ourbrends'>
            <Container>
                <Text title='our brends' />
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={6}
                            // spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                575: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 6,
                                },
                            }}
                            className='mySwiper pb-5'
                        >
                            {icons.map(icon => (
                                <SwiperSlide key={icon.id}>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div className='w-6rem'>
                                            <img src={icon.svg} alt='svg' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
