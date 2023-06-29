import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { MainContext } from "../../Services/Context/MainReducer";
import { useContext } from "react";
import "./postdet.css";
export function PostDetails() {
  const { Posts } = useContext(MainContext);
  const {
    likePosts,
    checkLikes,
    unLikePosts,
    addBookmark,
    checkBookMarks,
    removeBookmark,
  } = useContext(PostsContext);
  const { postId } = useParams();
  const PostsData = [...Posts].find((val) => val._id === postId);
  console.log(PostsData.img.length);
  return (
    <>
      <section className="PostDetails">
        <section className="leftPane">
          <RouteSec></RouteSec>
        </section>
        <div className="PostDetails_postsSection">
          <ul className="PostDetails__postsSection__posts">
            <li className="PostDetails__postsSection__posts-fName">
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>{PostsData.firstName}</p>
                <span>{PostsData.username}</span>
              </p>
            </li>
            <li>
              {PostsData.img.length !== 0 ? (
                <img src={PostsData.img}></img>
              ) : null}
            </li>
            <li className="PostDetails__postsSection__posts-Content">
              {PostsData.content}
            </li>
            <li className="PostDetails__postsSection__posts-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  checkLikes().includes(PostsData._id)
                    ? unLikePosts(PostsData._id)
                    : likePosts(PostsData._id)
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={
                  checkLikes().includes(PostsData._id) === true ? "red" : ""
                }
                stroke="red"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>{" "}
              {PostsData.likes.likeCount}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  checkBookMarks().includes(PostsData._id) === true
                    ? removeBookmark(PostsData._id)
                    : addBookmark(PostsData._id)
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={
                  checkBookMarks().includes(PostsData._id) === true
                    ? "green"
                    : ""
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
        </div>
        <section className="rightPane">
          <Suggested></Suggested>
        </section>
      </section>
    </>
  );
}
