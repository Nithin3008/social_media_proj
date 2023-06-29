import React from "react";
import { useContext } from "react";
import { MainContext } from "../../Services/Context/MainReducer";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import { useNavigate } from "react-router";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
export const PostsData = ({ PostsData }) => {
  const { loggedInUser } = useContext(MainContext);
  const { userAvatars } = useContext(UsersContext);
  const {
    likePosts,
    checkLikes,
    unLikePosts,
    addBookmark,
    checkBookMarks,
    removeBookmark,
    uploadNewPost,
    editPost,
    deletePost,
    sortByDate,
    Trending,
  } = useContext(PostsContext);
  const nav = useNavigate();
  return (
    <>
      {PostsData.map((val) => (
        <ul key={val._id} className="home__postsSection__posts">
          <li className="home__postsSection__posts-fName">
            <img
              onClick={() => nav(`/Profile1/${val.username}`)}
              src={userAvatars(val.username)}
              alt="profilePic"
            ></img>

            <p
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p>{val.firstName}</p>
              <span>{val.username}</span>
            </p>
            <p
              style={{
                display:
                  val.username === loggedInUser.username ? "block" : "none",
                marginLeft: "150px",
              }}
              className="dotsForFunc"
            >
              <svg
                onClick={() =>
                  showEdit === val._id ? setShowEdit("") : setShowEdit(val._id)
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#edf1ff"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
              <li style={{ display: val._id === showEdit ? "block" : "none" }}>
                <button
                  onClick={(e) => {
                    setShow(!show);
                    setObject(val);
                    setDetails(val.content);
                    setImage(val.img);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deletePost(val._id)}>Delete</button>
              </li>
            </p>
          </li>
          <li>
            {" "}
            {val.img ? (
              <img
                src={val.img}
                onClick={() => nav(`/PostDetails/${val._id}`)}
                alt="postPic"
              ></img>
            ) : null}
          </li>
          <li
            onClick={() => nav(`/PostDetails/${val._id}`)}
            className="home__postsSection__posts-Content"
          >
            {val.content}
          </li>
          <li className="home__postsSection__posts-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                checkLikes().includes(val._id)
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
              fill={checkBookMarks().includes(val._id) === true ? "green" : ""}
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
    </>
  );
};
