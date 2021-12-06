import { Container, Row } from 'react-bootstrap'
import { Filter, Header, Product } from '../Components/Category/Category'

const Category = () => {
    return (
        <div id='category' className='my-lg-5'>
            <Container>
            <Header />
                <Row>
                    <Product />
                    <Filter />
                </Row>
            </Container>
        </div>
    )
}

export default Category
