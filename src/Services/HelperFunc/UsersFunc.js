import { createContext } from "react"
import axios from "axios";


export const UsersContext=createContext()
export function UserProvider({children})
{
    function getUsers()
    {
        const users=async()=>
        {
            try {
                const response = await axios.get("/api/users")
                console.log(response.data.users)
                //   if(response.status===200)
                //   {
                   
                //   }
            } catch (error) {
                console.log(error)
            }
        }
        users()
    }
    return(<>
    <UsersContext.Provider value={{getUsers}} >{children}</UsersContext.Provider>
    </>)
}