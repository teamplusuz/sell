import { Link } from 'react-router-dom'
import './general.scss'

export const Breadcrumbs = ({ title1, title2, link1, center }) => {
    return (
        <div id='breadcrumbs' className={`d-flex ${center ? 'justify-content-center' : ''}`}>
            <div>
                <Link to='/' className='title text-dark'>
                    Home
                </Link>
            </div>
            <div className='title text-dark mx-2'>{'/'}</div>
            {title2 ? (
                <Link to={link1} className='title text-dark'>
                    {title1}
                </Link>
            ) : (
                <div className='title1'>{title1}</div>
            )}
            {title2 ? (
                <>
                    <div className='title text-dark mx-2'>{'/'}</div>
                    <div className='title1'>{title2}</div>
                </>
            ) : (
                ''
            )}
        </div>
    )
}
