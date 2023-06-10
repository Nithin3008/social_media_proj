
import { useContext } from "react"
import { MainContext } from "../../Services/Context/MainReducer"
import { FollowContext } from "../../Services/HelperFunc/FollowFunc"
import {NavLink} from "react-router-dom"
import "./home.css"

export function Home1()
{
    const {Posts,Users,loggedInUser,loggedInUserFollwers}=useContext(MainContext)
    const {setFollowers}=useContext(FollowContext)
    console.log(Users)
    const postsD=[...Posts].filter((val)=>val.username==loggedInUser.username)
    const postFollow=[...Posts].filter((posts)=>loggedInUserFollwers.find((user)=>user===posts.username))
    const finalPosts=[...postsD,...postFollow]
    const PostsData=[...finalPosts]
    
    return(<div>
        <section className="home">
            <div className="home_pages">
                <h1>AnimeVerse</h1>
                <NavLink className="home_pages-navLinks"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa005a" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>Home</NavLink>
                <NavLink className="home_pages-navLinks"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa005a" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg>Explore</NavLink>
                <NavLink className="home_pages-navLinks"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa005a" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>Bookmark</NavLink>
                <button>Create New Post</button>
                <div>
                    <img></img>
                    <p>userName</p>
                </div>
            </div>
            <div className="home_postsSection">
                <div className="home_postsSection-filters">
                    <button>Trending🔥🔥</button>
                    <button>Sort By Date</button>
                </div>
                {PostsData.map((val)=><ul key={val._id} className="home__postsSection__posts">
                    <li className="home__postsSection__posts-fName">{val.firstName} <span>{val.username}</span></li>
                    <li><img src={val.img}></img></li>
                    <li className="home__postsSection__posts-Content">{val.content}</li>
                    <li className="home__postsSection__posts-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> {val.likes.likeCount} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></li>
                </ul>)}
             </div>
            <div className="home_followers">
                <h1>Suggested Users</h1>
            {Users.map((val)=><ul key={val._id}>
                    <p><li>{val.firstName}</li>
                    <span   >{val.username}</span></p>
                    
                    <button onClick={()=>setFollowers(val._id)}>Follow</button>
                </ul>)}
            </div>
        </section>
    </div>)
}