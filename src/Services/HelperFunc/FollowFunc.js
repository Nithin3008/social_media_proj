import { createContext } from "react";
import axios from "axios";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const FollowContext=createContext()
export function  FollowProvider({children})
{
    const encodedToken=localStorage.getItem("token")
    
    function setFollowers(followUserId)
    {
        console.log(followUserId)
        console.log(encodedToken)
        const setFollow=async()=>
        {
            try {
                const response = await axios.post(`/api/users/follow/${followUserId}`,{},{
                    headers: {
                      authorization: encodedToken, 
                    },
                  });
                  console.log(response)
                  if(response.status===200)
                  {
                    toast.success(`You following a new user`,{
                        position:"top-center"})
                  }
                  let followers=response.data.user.following.map((val)=>val.username)
                  console.log(followers)
            } catch (error) {
                console.log(error)
            }
        }
        setFollow()
    }
    return(<>
    <FollowContext.Provider value={{setFollowers}}>{children}</FollowContext.Provider>
    <ToastContainer></ToastContainer>
    </>)
}