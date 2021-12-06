import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Category from './Screens/Category'
import Home from './Screens/Home'
import ErrorPage from './Screens/ErrorPage'
import { Sidebar } from './Components/Sidebar'
import { Footer } from './Components/Footer'
import Shop from './Screens/Shop'

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

export default App
