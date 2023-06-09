import { createContext } from "react"
import axios from "axios";


export const PostsContext=createContext()
export function PostsProvider({children})
{
    const getPosts=()=>
    {
        const posts=async()=>
        {
            try {
                const response = await axios.get(`/api/posts`)
                  
                  if(response.status===200)
                  {
                    console.log(response.data.posts)
                  }
            } catch (error) {
                console.log(error)
            }
        }
        posts()
    }

    return(<>
    <PostsContext.Provider value={{getPosts}}>{children}</PostsContext.Provider>
    </>)
}