// import React, { useState } from 'react';
// import { FloatingLabel, Form } from 'react-bootstrap';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// async function sellerRegisterAPI(sellerInputs) {
//   // Mock implementation of the API call
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ status: 200, data: { firstname: sellerInputs.firstname } });
//     }, 1000);
//   });
// }

// function Auth({ role }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isRegister = location.pathname.includes('register');
//   const isSeller = role === 'seller';
//   const isBuyer = role === 'buyer';

//   const [sellerInputs, setSellerInputs] = useState({
//     firstname: "", lastname: "", email: "", phonenumber: "", password: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSellerInputs({ ...sellerInputs, [name]: value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (sellerInputs.firstname && sellerInputs.lastname && sellerInputs.email && sellerInputs.phonenumber && sellerInputs.password) {
//       try {
//         const result = await sellerRegisterAPI(sellerInputs);
//         console.log(result);
//         if (result.status === 200) {
//           alert(`Welcome ${result.data.firstname}...Please Login to explore our website!!!`);
//           setSellerInputs({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
//           setTimeout(() => {
//             navigate('/login');
//           }, 2000);
//         } else {
//           alert(result.response.data);
//           setTimeout(() => {
//             setSellerInputs({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
//           }, 2000);
//         }
//       } catch (err) {
//         console.error(err);
//         alert("Registration failed! Please try again.");
//       }
//     } else {
//       alert("Please fill the form completely!!!");
//     }
//   };

//   return (
//     <>
//       <div style={{ width: '100%', height: '100vh' }} className="d-flex justify-content-center align-items-center">
//         <div className="container w-75">
//           <Link to='/' style={{ textDecoration: 'none' }} className='fw-bolder'>
//             <i className="fa-solid fa-arrow-left"></i> Back to Home
//           </Link>
//           <div className="card shadow p-5">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <img className='w-100' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="Authentication" />
//               </div>
//               <div className="col-lg-6">
//                 <h1 className='fw-bolder mt-2'>
//                   <i className="fa-brands fa-docker"></i> Rentify
//                 </h1>
//                 <h5 className='fw-bolder mt-2'>
//                   {isRegister ? (isSeller ? 'Register as Seller' : isBuyer ? 'Register as Buyer' : 'Sign up') : 'Sign in'} to your Account
//                 </h5>
//                 {isRegister ? (
//                   <Form>
//                     {(isSeller || isBuyer) && (
//                       <>
//                         <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
//                           <Form.Control
//                             type="text"
//                             placeholder="First Name"
//                             name="firstname"
//                             value={sellerInputs.firstname}
//                             onChange={handleChange}
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel controlId="floatingInput" label="Second Name" className="mb-3">
//                           <Form.Control
//                             type="text"
//                             placeholder="Second Name"
//                             name="lastname"
//                             value={sellerInputs.lastname}
//                             onChange={handleChange}
//                           />
//                         </FloatingLabel>
//                       </>
//                     )}
//                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                       <Form.Control
//                         type="email"
//                         placeholder="name@example.com"
//                         name="email"
//                         value={sellerInputs.email}
//                         onChange={handleChange}
//                       />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingInput" label="Phone No." className="mb-3">
//                       <Form.Control
//                         type="number"
//                         placeholder=""
//                         name="phonenumber"
//                         value={sellerInputs.phonenumber}
//                         onChange={handleChange}
//                       />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingPassword" label="Password">
//                       <Form.Control
//                         type="password"
//                         placeholder="Password"
//                         name="password"
//                         value={sellerInputs.password}
//                         onChange={handleChange}
//                       />
//                     </FloatingLabel>
//                   </Form>
//                 ) : (
//                   <Form>
//                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                       <Form.Control type="email" placeholder="name@example.com" />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingPassword" label="Password">
//                       <Form.Control type="password" placeholder="Password" />
//                     </FloatingLabel>
//                   </Form>
//                 )}
//                 {isRegister ? (
//                   <div className="mt-3">
//                     <button onClick={handleRegister} style={{ color: 'white', border: 'none' }} className='btn btn-primary'>Register</button>
//                     <p>Already have an Account? Click here to <Link className='text-info' to={'/login'}>Login</Link></p>
//                   </div>
//                 ) : (
//                   <div className="mt-3">
//                     <button className='btn btn-primary'>Login</button>
//                     <p>New User? Register as <Link className='text-info' to={'/register/seller'}>Seller</Link> or <Link className='text-info' to={'/register/buyer'}>Buyer</Link></p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <ToastContainer position='top-center' theme='colored' autoClose={3000} />
//       </div>
//     </>
//   );
// }

// export default Auth;





// import React from 'react'
// import { FloatingLabel, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Auth() {
//   return (
//     <>
//        <div style={{ width: '100%', height: '100vh' }} className="d-flex justify-content-center align-items-center">
//       <div className="container w-75">
//         <Link to='/' style={{ textDecoration: 'none' }} className='fw-bolder'>
//           <i className="fa-solid fa-arrow-left"></i> Back to Home
//         </Link>
//         <div className="card shadow p-5">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <img className='w-100' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="Authentication" />
//             </div>
//             <div className="col-lg-6">
//               <h1 className='fw-bolder mt-2'>
//                 <i className="fa-brands fa-docker"></i> Project Fair
//               </h1>
//               <h5 className='fw-bolder mt-2'>
//                 Sign in to your Account
//               </h5>
//               <Form>
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label="Email address"
//                   className="mb-3"
//                 >
//                   <Form.Control
//                     type="email"
//                     placeholder="name@example.com"
//                   />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingPassword" label="Password">
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                   />
//                 </FloatingLabel>
//               </Form>
//               <div className="mt-3">
//                 <button  style={{ backgroundColor: 'lightgreen', color: 'white', border: 'none' }} className='btn btn-primary'>
//                   Login
//                 </button>
//                 <p>New User? Register as a <Link className='text-info' to={'/register-user'}>User</Link> or <Link className='text-info' to={'/register-seller'}>Seller</Link></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position='top-center' theme='colored' autoClose={3000} />
//     </div>
//     </>
//   )
// }

// export default Auth





import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../services/allAPI';

function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginAPI({ email, password });
      if (result.status === 200) {
        alert('Login successful!');
        const userRole = result.data.role;
        if (userRole === 'seller') {
          navigate('/seller');  // Replace with your seller page path
        } else if (userRole === 'buyer') {
          navigate('/buyer');  // Replace with your buyer page path
        }
      } else {
        alert('Invalid email or password!');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed! Please try again.');
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
                  <i className="fa-brands fa-docker"></i> Project Fair
                </h1>
                <h5 className='fw-bolder mt-2'>
                  Sign in to your Account
                </h5>
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                </Form>
                <div className="mt-3">
                  <button onClick={handleLogin} style={{color: 'white', border: 'none' }} className='btn btn-primary'>
                    Login
                  </button>
                  <p>New User? Register as a <Link className='text-info' to={'/register/buyer'}>Buyer</Link> or <Link className='text-info' to={'/register/seller'}>Seller</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;



