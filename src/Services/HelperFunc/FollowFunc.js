import { createContext,useContext } from "react";
import axios from "axios";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from "../Context/MainReducer";
export const FollowContext=createContext()
export function  FollowProvider({children})
{
    const encodedToken=localStorage.getItem("token")
    const {dispatcherMain}=useContext(MainContext)
    function setFollowers(followUserId)
    {
        const setFollow=async()=>
        {
            try {
                const response = await axios.post(`/api/users/follow/${followUserId}`,{},{
                    headers: {
                      authorization: encodedToken, 
                    },
                  });
                  if(response.status===200)
                  {
                    toast.success(`You following a new user`,{
                        position:"top-center"})
                  }
                  let followers=response.data.user.following.map((val)=>val.username)
                  dispatcherMain({type:"userDetails",payload:response.data.user})
                  dispatcherMain({type:"AddFollowing",payload:followers})
                  console.log(followers)
            } catch (error) {
                console.log(error)
            }
        }
        setFollow()
    }

    function setUnFollowers(followUserId)
    {
        console.log(followUserId)
        const setUnFollow=async()=>
        {
            try {
                const response = await axios.post(`/api/users/unfollow/${followUserId}`,{},{
                    headers: {
                      authorization: encodedToken, 
                    },
                  });
                  if(response.status===200)
                  {
                    toast.warning(`You unfollowing user`,{
                        position:"top-center"})
                  }
                  let followers=response.data.user.following.map((val)=>val.username)
                  dispatcherMain({type:"userDetails",payload:response.data.user})
                  dispatcherMain({type:"AddFollowing",payload:followers})
            } catch (error) {
                console.log(error)
            }
        }
        setUnFollow()
    }
    return(<>
    <FollowContext.Provider value={{setFollowers,setUnFollowers}}>{children}</FollowContext.Provider>
   
    </>)
}