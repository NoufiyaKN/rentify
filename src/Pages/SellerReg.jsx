import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sellerRegisterAPI } from '../services/allAPI';

function SellerReg() {

    const navigate = useNavigate(); 

    const [sellerInputs,setSellerInputs] = useState({
        firstname: "", lastname: "", email: "", phonenumber: "", password: ""
      })
      console.log(sellerInputs);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (sellerInputs.firstname && sellerInputs.lastname && sellerInputs.email && sellerInputs.phonenumber && sellerInputs.password) {
      try {
        const result = await sellerRegisterAPI(sellerInputs);
        console.log(result);
        if (result.status === 200) {
          alert(`Welcome ${result.data.firstname}...Please Login to explore our website!!!`);
          setSellerInputs({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
          setTimeout(() => {
            navigate('/seller');
          }, 2000);
        } else {
          alert(result.response.data);
          setTimeout(() => {
            setSellerInputs({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
          }, 2000);
        }
      } catch (err) {
        console.error(err);
        alert("Registration failed! Please try again.");
      }
    } else {
      alert("Please fill the form completely!!!");
    }
  };



  return (
    <>
    <div style={{ width: '100%', height: '100vh' }} className="d-flex justify-content-center align-items-center">
      <div className="container w-75">
        <Link to='/' style={{ textDecoration: 'none' }} className='fw-bolder'>
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
        <div className="card shadow p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="Authentication" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2'>
                 Seller Registration 
              </h1>
              <h5 className='fw-bolder mt-2'>
                Sign up to your Account
              </h5>
              <Form>
                <FloatingLabel 
                  controlId="floatingFirstname"
                  label="Firstname"
                  className="mb-3"
                >
                  <Form.Control value={sellerInputs.firstname} onChange={e=>setSellerInputs({...sellerInputs,firstname:e.target.value})}
                    type="text"
                    placeholder="Firstname"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingLastname"
                  label="Lastname"
                  className="mb-3"
                >
                  <Form.Control value={sellerInputs.lastname} onChange={e=>setSellerInputs({...sellerInputs,lastname:e.target.value})}
                    type="text"
                    placeholder="Lastname"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={sellerInputs.email} onChange={e=>setSellerInputs({...sellerInputs,email:e.target.value})}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPhoneNo"
                  label="Phone No."
                  className="mb-3"
                >
                  <Form.Control value={sellerInputs.phonenumber} onChange={e=>setSellerInputs({...sellerInputs,phonenumber:e.target.value})}
                    type="number"
                    placeholder="Phone No."
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={sellerInputs.password} onChange={e=>setSellerInputs({...sellerInputs,password:e.target.value})}
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
              </Form>
              <div className="mt-3">
                <button onClick={handleRegister} style={{color: 'white', border: 'none' }} className='btn btn-primary'>
                  Register
                </button>
                <p>Already have an Account? Click here to <Link className='text-info' to={'/login'}>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
    </>
  )
}

export default SellerReg
