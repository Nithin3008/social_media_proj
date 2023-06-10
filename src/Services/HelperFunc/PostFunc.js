import { createContext,useContext } from "react"
import axios from "axios";
import { MainContext } from "../Context/MainReducer";

export const PostsContext=createContext()
export function PostsProvider({children})
{
    const encodedToken=localStorage.getItem("token")
    const {dispatcherMain}=useContext(MainContext)
    const getPosts=()=>
    {
        const posts=async()=>
        {
            try {
                const response = await axios.get(`/api/posts`)
                  
                  if(response.status===200)
                  {
                    console.log(response.data.posts)
                    dispatcherMain({type:"getPosts",payload:response.data.posts})
                  }
            } catch (error) {
                console.log(error)
            }
        }
        posts()
    }
    function likePosts(postId)
    {
        const like=async()=>
        {
            try {
                const response=await axios.post(`/api/posts/like/${postId}`,{},{
                    headers: {
                        authorization: encodedToken, 
                      },
                })
                console.log(response.data.posts)
                dispatcherMain({type:"getPosts",payload:response.data.posts})
            } catch (error) {
                console.log(error)
            }
        }
        like()
    }

    return(<>
    <PostsContext.Provider value={{getPosts,likePosts}}>{children}</PostsContext.Provider>
    </>)
}