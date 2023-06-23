import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { MainContext } from "../../Services/Context/MainReducer";
import { useContext } from "react";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import "./bookmark.css";
export function Bookmark1() {
  const { BookMarks, Posts } = useContext(MainContext);
  const {
    likePosts,
    checkLikes,
    unLikePosts,
    addBookmark,
    checkBookMarks,
    removeBookmark,
  } = useContext(PostsContext);
  const { userAvatars } = useContext(UsersContext);
  const PostsData = Posts.filter((bookPosts) =>
    BookMarks.includes(bookPosts._id)
  );
  return (
    <>
      <section className="bookmark">
        <RouteSec></RouteSec>
        <div className="bookmark_postsSection">
          {PostsData.map((val) => (
            <ul key={val._id} className="bookmark__postsSection__posts">
              <li className="bookmark__postsSection__posts-fName">
                <img alt="profilePic" src={userAvatars(val.username)}></img>
                <p style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                     <p>{val.firstName}</p>  
                     <span>{val.username}</span>
                 </p>
              </li>
              <li>{val.img ? <img src={val.img}></img> : null}</li>
              <li className="bookmark__postsSection__posts-Content">
                {val.content}
              </li>
              <li className="bookmark__postsSection__posts-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() =>
                    checkLikes().includes(val._id) === true
                      ? unLikePosts(val._id)
                      : likePosts(val._id)
                  }
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={checkLikes().includes(val._id) === true ? "red" : ""}
                  stroke="red"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>{" "}
                {val.likes.likeCount}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() =>
                    checkBookMarks().includes(val._id) === true
                      ? removeBookmark(val._id)
                      : addBookmark(val._id)
                  }
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={
                    checkBookMarks().includes(val._id) === true ? "green" : ""
                  }
                  stroke="green"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </li>
            </ul>
          ))}
        </div>
        <Suggested></Suggested>
      </section>
    </>
  );
}
