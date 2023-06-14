import { createContext,useEffect,useReducer } from "react"
import axios from "axios";

export const MainContext=createContext()
export function ReducerProv({children})
{
    useEffect(()=>
    {
        const intialData=async()=>
        {
            const response = await axios.get(`/api/posts`)
            dispatcherMain({type:"getPosts",payload:response.data.posts})
            const resUsers = await axios.get("/api/users")
            dispatcherMain({type:"getUsers",payload:resUsers.data.users})
        }
        intialData()
    },[])
    const MainData={
        ExistedUsers:[],
        isLoggedin:false,
        loggedInUser:{fname:"",lname:"",username:""},
        bookmarks:[],
        posts:[],
        followers:[],
        following:[],
    }
    const [state, dispatcherMain] = useReducer(MainFun, MainData);

    function MainFun(state,action)
    {
        if(action.type==="getPosts")
        {
            return {...state,posts:action.payload}
        }
        else if(action.type==="getUsers")
        {
            return {...state,ExistedUsers:action.payload}
        }
        else if(action.type==="userDetails")
        {
            const user={
                fname:action.payload.firstName,
                lname:action.payload.lastName,
                username:action.payload.username,
            }
            return{...state,bookmarks:action.payload.bookmarks,followers:action.payload.followers,following:action.payload.following, loggedInUser:user}
        }
        else if(action.type==="AddFollowing")
        {
            return{...state,following:action.payload}
        }
        else if(action.type==="AddBookmarks")
        {
            return{...state,bookmarks:action.payload}
        }
        return state
    }


























    // console.log(state.posts)
    return(<>
        <MainContext.Provider value={{dispatcherMain,Posts:state.posts,Users:state.ExistedUsers,loggedInUser:state.loggedInUser,loggedInUserFollwers:state.following,BookMarks:state.bookmarks}}>{children}</MainContext.Provider>
    </>)
}