
import { useContext } from "react"
import { MainContext } from "../../Services/Context/MainReducer"
import "./home.css"

export function Home1()
{
    const {Posts,Users}=useContext(MainContext)
    return(<div>
        <section className="home">
            <div className="home_pages">
                <button>Home</button>
                <button>Explore</button>
                <button>Bookmark</button>
                <button>Create New Post</button>
                <div>
                    <img></img>
                    <p>userName</p>
                </div>
            </div>
            <div className="home_posts">
                {Posts.map((val)=><ul key={val._id}>
                    <li>{val.username}</li>
                    <li>{val.content}</li>
                    <li>{val.createdAt}</li>
                    <li>{val.likes.likeCount}</li>
                </ul>)}
            </div>
            <div className="home_followers">
                {Users.map}
            </div>
        </section>
    </div>)
}