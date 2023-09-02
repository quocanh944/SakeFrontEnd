import Header from './components/comon/Header'
import { Routes, Route, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/comon/Footer';
import Body1 from './pages/Body1';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Review from './pages/Review'
import ShopMain from './pages/ShopMain';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail'
import { useEffect, useState } from 'react';

function App() {
  const [params, setParams] = useSearchParams();
  const location = useLocation()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  let id = params.get("id")

  useEffect(()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[location])
  console.log(search);
  return (
    <div className='max-w-[1440px] mx-auto tracking-[-0.6px] bg-backgroundprimary flex-shrink-0'>
      <Header handleSeachValue={valueSeach => {
        setSearch(valueSeach)
        navigate('/shop')
      }} />
      <Routes>
        <Route path='/' element={<Body1 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/review' element={<Review />} />
        <Route path='/shop' element={<ShopMain searchValue={search} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<ProductDetail id={id} />} />
      </Routes>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
