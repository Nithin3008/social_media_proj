import { createContext, useContext } from "react"
import axios from "axios";
import { MainContext } from "../Context/MainReducer";

export const UsersContext=createContext()
export function UserProvider({children})
{
    const {dispatcherMain,loggedInUserFollwers,Users}=useContext(MainContext)
    const encodedToken=localStorage.getItem("token")
    // function getUsers()
    // {
    //     const users=async()=>
    //     {
    //         try {
    //             const response = await axios.get("/api/users")
    //             console.log(response.data.users)        
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     users()
    // }
    function followersExist(userName)
    {
        const check=loggedInUserFollwers.find((user)=>user===userName)
        return check===undefined?false:true
    }

        const editUsers=async(newDetails)=>
        {
            try {
                const response=await axios.post(`/api/users/edit`,{ userData:newDetails},{
                    headers: {
                        authorization: encodedToken, 
                      },
                })
                dispatcherMain({type:"userDetails",payload:response.data.user})
            } catch (error) {
                console.log(error)
            }
        }
    
    return(<>
    <UsersContext.Provider value={{followersExist,editUsers}} >{children}</UsersContext.Provider>
    </>)
}