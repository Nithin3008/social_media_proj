import { MainContext } from "../../Services/Context/MainReducer";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { useContext } from "react";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import "./explore.css";
import { useNavigate } from "react-router";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
export function Explore1() {
  const { Posts } = useContext(MainContext);
  const {
    likePosts,
    checkLikes,
    unLikePosts,
    addBookmark,
    checkBookMarks,
    removeBookmark,
  } = useContext(PostsContext);
  const { userAvatars } = useContext(UsersContext);
  const PostsData = [...Posts];
  const nav = useNavigate();
  console.log(PostsData);
  return (
    <div>
      <section className="Explore">
        <RouteSec></RouteSec>
        <div className="Explore_postsSection">
          {PostsData.map((val) => (
            <ul key={val._id} className="Explore__postsSection__posts">
              <li
                className="Explore__postsSection__posts-fName"
                onClick={() => nav(`/Profile1/${val.username}`)}
              >
                <img alt="profilePic" src={userAvatars(val.username)}></img>
                {val.firstName} <span>{val.username}</span>
              </li>
              <li>
                {val.img?(
                   <img
                   alt="postPic"
                   src={val.img}
                   onClick={() => nav(`/PostDetails/${val._id}`)}
                 ></img>):null
                }
               
              </li>
              <li className="Explore__postsSection__posts-Content">
                {val.content}
              </li>
              <li className="Explore__postsSection__posts-button">
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
    </div>
  );
}
