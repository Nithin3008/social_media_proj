import { createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from "../Context/MainReducer";
export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const {dispatcherMain}=useContext(MainContext)
  const nav=useNavigate()
  function LoginHandler({userName,pwd}) {
    console.log(userName,pwd)
    const loginHandle1 = async () => {
      // console.log(userName,pwd)
        try {
            const response = await axios.post(`/api/auth/login`, {
                username:userName,
                password: pwd
              });
              const userInfo=response.data.foundUser
              dispatcherMain({type:"userDetails",payload:userInfo})
              if(response.status===201)
              {
                  toast.success(`Welcome Back`,{
                  position:"top-center"})
                        // nav("/Login1")
              }
        } catch (error) {
            console.log(error)
        }     
    
  }
  loginHandle1();
}

function Signup(userDetails)
      {
        
                  const signupHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/signup`, {
                        firstName: userDetails?.fName,
                        lastName: userDetails?.lName,
                        username: userDetails?.userName,
                        password: userDetails?.pwd,
                      });
                      localStorage.setItem("token", response.data.encodedToken);
                      if(response.status===201)
                      {
                        toast.success(`Welcome ${userDetails.fName}`,{
                          position:"top-center"})
                        nav("/Login1")
                      }
                      
                    } catch (error) {
                      console.log(error);
                    }
                   
                    
                  };
                 
                  signupHandler()
      }    
  return (<><AuthContext.Provider value={{ LoginHandler,Signup }}>{children}</AuthContext.Provider>
  <ToastContainer></ToastContainer></>);
}
