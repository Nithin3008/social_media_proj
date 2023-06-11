import { createContext,useContext } from "react"
import axios from "axios";
import { MainContext } from "../Context/MainReducer";

export const PostsContext=createContext()
export function PostsProvider({children})
{
    const encodedToken=localStorage.getItem("token")
    const {dispatcherMain,Posts,loggedInUser}=useContext(MainContext)
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

    function unLikePosts(postId)
    {
        const unLike=async()=>
        {
            try {
                const response=await axios.post(`/api/posts/dislike/${postId}`,{},{
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
        unLike()
    }



    function checkLikes()
    {
        const x=Posts.map((val)=>val.likes.likedBy.find((user)=>user.username===loggedInUser.username)===undefined?false:val._id)
        return x
        // console.log(Posts.map((val)=>val.likes.likedBy.filter((val)=>val.username===loggedInUser.username?val._id:"")))
        
    }
    checkLikes()

    return(<>
    <PostsContext.Provider value={{getPosts,likePosts,checkLikes,unLikePosts}}>{children}</PostsContext.Provider>
    </>)
}