import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import SellerUser from './Pages/SellerUser'
import SellerReg from './Pages/SellerReg'
import BuyerReg from './Pages/BuyerReg'
import Buyer from './Pages/Buyer'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/register' element={<Auth/>} /> */}
      <Route path='/login' element={<Auth />} />
      <Route path='/register/buyer' element={<BuyerReg />} />
      <Route path='/register/seller' element={<SellerReg />} />
      <Route path='/seller' element={<SellerUser />} />
      <Route path='/buyer' element={<Buyer />} />
      </Routes>
    </>
  )
}

export default App
