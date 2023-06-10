import { createContext, useContext } from "react"
import axios from "axios";
import { MainContext } from "../Context/MainReducer";

export const UsersContext=createContext()
export function UserProvider({children})
{
    const {dispatcherMain,loggedInUserFollwers}=useContext(MainContext)
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
    return(<>
    <UsersContext.Provider value={{followersExist}} >{children}</UsersContext.Provider>
    </>)
}