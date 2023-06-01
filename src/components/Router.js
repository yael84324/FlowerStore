import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Products from './Products'
import AddProduct from './addProduct'
import css from '../App.css'
import Basket from './basket'
import Pay from './pay'
import Register from './Register'
import ImageUploader from './ImageUploader'

export default function Router() {

    return <div>
        <NavBar />
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='register' element={<Register />} />
            <Route path='addProduct' element={<AddProduct />} />
            <Route path='basket' element={<Basket />} />
            <Route path='pay' element={<Pay />} />
            <Route path='profile' element={< ImageUploader/>} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<h1>404 Page not found</h1>} />
        </Routes>
    </div >
}