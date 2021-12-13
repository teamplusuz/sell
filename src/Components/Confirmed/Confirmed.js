import { Link } from 'react-router-dom'
import { Breadcrumbs } from './../Breadcrumbs'
import './Confirmed.scss'

export const Header = () => {
    return (
        <div id='header' className='mt-5'>
            <Breadcrumbs title1={'Order confirmed'} center />
            <div className='pb-5 text-center'>
                <h1 className='hero-heading'>order confirmed</h1>
            </div>
            <div className='pb-5 text-center'>
                <div className='icon-rounded bg-primary-light mb-3 mx-auto text-primary'>
                    <i className='fas fa-check fs-xl-30' />
                </div>
                <h4 className='mb-3'>Thank you, Julie. Your order is confirmed.</h4>
                <p className='text-muted mb-5'>
                    Your order hasn't shipped yet but we will send you ane email when it does.
                </p>
                <p>
                    <Link className='btn btn-outline-dark text-uppercase rounded-0' to='/order'>
                        view or manage your order
                    </Link>
                </p>
            </div>
        </div>
    )
}
