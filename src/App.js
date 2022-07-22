import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Product/Products';
import ProductDetails from './pages/Product/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState(null);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route
                        path='/products'
                        element={<Products setProducts={setProducts} />}>
                        <Route
                            path=':productId'
                            element={<ProductDetails products={products} />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

export default App;
