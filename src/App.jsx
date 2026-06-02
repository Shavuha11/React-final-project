import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Profile from './pages/Profile'
import Login from './pages/Login'

import ProtectedRoute from './components/ProtectedRoute'

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='/products'
                    element={<Products />}
                />

                <Route
                    path='/product/:id'
                    element={<ProductDetails />}
                />

                <Route
                    path='/login'
                    element={<Login />}
                />

                <Route
                    path='/profile'
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    )

}

export default App
