import { createContext } from "react";
import axios from "axios";

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
                  console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        setFollow()
    }
    return(<>
    <FollowContext.Provider value={{setFollowers}}>{children}</FollowContext.Provider>
    </>)
}