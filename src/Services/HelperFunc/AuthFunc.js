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
        try {
            const response = await axios.post(`/api/auth/login`, {
                username:userName,
                password: pwd
              });
              const userInfo=response.data.foundUser
              console.log(response.data.foundUser)
              localStorage.setItem("token", response.data.encodedToken);
              dispatcherMain({type:"userDetails",payload:userInfo})
              if(response.status===200)
              {
                  toast.success(`Welcome Back`,{
                  position:"top-center"})
                   nav("/Home1")
              }
              else
              {
                toast.error(`Wrong Details Please try Again`,{
                  position:"top-center"})
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
                        nav("/")
                      }
                      
                    } catch (error) {
                      console.log(error);
                    }
                   
                    
                  };
                 
                  signupHandler()
      }    
      function logoutFun()
      {
        localStorage.clear()  
        toast.success(`Bye Bye`,{
          position:"top-center"})
        nav("/")
      }
  return (<><AuthContext.Provider value={{ LoginHandler,Signup,logoutFun }}>{children}</AuthContext.Provider>
  <ToastContainer></ToastContainer></>);
}
