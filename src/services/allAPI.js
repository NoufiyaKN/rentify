import { commonAPI } from "./commonAPI";
import axios from 'axios';
import { SERVER_URL } from "./serverUrl";

export const sellerRegisterAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register/seller`,reqBody)
}

export const buyerRegisterAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register/buyer`,reqBody)
}

export const uploadProjectAPI = async(reqBody)=>{
  return await commonAPI("POST",`${SERVER_URL}/seller`,reqBody)
}

export const getUserPropertyAPI = async () =>{
  return await commonAPI("GET",`${SERVER_URL}/seller`,"")
}

// export const loginAPI = async(reqBody)=>{
//     return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
// }

export const loginAPI = async (loginData) => {
  try {
    const response = await axios.post('/login', loginData);
    return response;
  } catch (error) {
    return error.response || { status: 500, data: { message: 'Server error' } };
  }
};