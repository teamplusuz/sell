import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Category from './Screens/Category'
import Cart from './Screens/Cart'
import Checkout from './Screens/Checkout'
import Home from './Screens/Home'
import ErrorPage from './Screens/ErrorPage'
import { Sidebar } from './Components/Sidebar'
import { Footer } from './Components/Footer'
import Shop from './Screens/Shop'
import Confirmed from './Screens/Confirmed'
import Contact from './Screens/Contact'
import Order from './Screens/Order'
import { connect } from 'react-redux'

function App() {
    const routes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/shop',
            component: Shop,
        },
        {
            path: '/category/:id',
            component: Category,
        },
        {
            path: '/cart',
            component: Cart,
        },
        {
            path: '/checkout/:id',
            component: Checkout,
        },
        {
            path: '/confirmed',
            component: Confirmed,
        },
        {
            path: '/contact',
            component: Contact,
        },
        {
            path: '/order',
            component: Order,
        },
        {
            component: ErrorPage,
        },
    ]

    return (
        <div className='App grotesk'>
            <Router>
                <Sidebar />
                <Switch>
                    {routes.map(route => (
                        <Route
                            key={route.component}
                            path={route.path}
                            component={route.component}
                            exact
                        />
                    ))}
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default connect()(App)
