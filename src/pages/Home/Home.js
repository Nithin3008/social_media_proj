
import { useContext } from "react"
import { PostsContext } from "../../Services/HelperFunc/PostFunc"

export function Home1()
{
    const {getPosts}=useContext(PostsContext)
    getPosts()
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
            <div className="home_posts"></div>
            <div className="home_followers"></div>
        </section>
    </div>)
}