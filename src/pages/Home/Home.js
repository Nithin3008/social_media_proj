import { useContext, useState } from "react";
import { MainContext } from "../../Services/Context/MainReducer";
import "./home.css";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { useNavigate } from "react-router";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Home1() {
  const { Posts, loggedInUser, loggedInUserFollwers } = useContext(MainContext);
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
  const [show, setShow] = useState(false);
  const [editObject, setObject] = useState({});
  const [editDetails, setDetails] = useState();
  const [editImage, setImage] = useState();
  const [showEdit, setShowEdit] = useState("");
  const { userAvatars } = useContext(UsersContext);
  const nav = useNavigate();
  const postsD = [...Posts].filter(
    (val) => val.username == loggedInUser.username
  );
  const postFollow = [...Posts].filter((posts) =>
    loggedInUserFollwers.find((user) => user.username === posts.username)
  );
  const PostsData = [...postsD, ...postFollow];
  const postDetails = {
    img: "",
    content: "",
  };
  function checkValue() {
    postDetails.img.length>0 ||postDetails.content.length>0?uploadNewPost(postDetails):toast.error(`please fill something`, {
      position: "bottom-right",
    });
  }
  function sendEditPost() {
    const x = { ...editObject, img: editImage, content: editDetails };
    editPost(x);
  }
  return (
    <div>
      <section className="home">
        <section className="leftPane">
        <RouteSec></RouteSec>
        </section>
        
        <div
          style={{ display: show ? "block" : "none" }}
          className="editSectionPost"
        >
          <div className="editSectionPost-details">
            <h1>Edit Post</h1>
            <input
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={editDetails}
            ></input>
            <button onClick={() => setImage(null)}>
              Remove Existing Image
            </button>
            <label>
            <img alt="gallerySymbol" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1BJREFUSEudVz1v01AUPccRHZCIm8aVEEhQhDpTWBgQamFiBBYkFvoTKiYmmk6wMLAyZSlsCH5B07kDSMBelg7FSZ0MLC2+yM9+znt+z07AQxs9X99zP8491ya8FwGI/5Zx2mhl3vT85nwQU7Spvf2kH6fZpvTqD6I4Vf/qHdWVZ/oYQUhZx+zcuk5O5OoZcK2xzlkXqP54zVqCUaeDb6Qyqm2muiEiwWiC9xA8sf3VAzQFJ4IvZy08uHiBx8pfJYQ8ZAKjRJ4KsKud/RecW4m33ZBbFrDROYU1HMtLADszqVw1MCOsAJOy120H93NquPzQwD0A280Z19fBuSOquvvRIjfyjOcCztiXsdC4fJ4zi7pYCuDlRW5Y7dWl1nEMx5JnXDiap8dTG7+1SJGxmYAFTGCYpD0Bt/WUNALXZV/pvxe4sCmrORynPYBlj50qu4w9ALEAwY26epfAteOUs7onwLZfEhyuJ0GKmwA6KXEASssnJhmw02M3YxPYbrQApwQCAC1FFOJR1Oan7Gc8kVcUeVEHrFitxcIQzHxJqB5LVuaMYLmS2aq4BagMnwHIRUHbiSyMJvgOYNUZ8Qq5qovEM8fTcSLweSnkwySR63+I3aU27pI8zTPMByUey+2AeL0U8l45rzPWnkGuYpzssH8GKdY6HSbZ8dGRnL98ib9zuGLbFADxiTyOOvw4U/ksycxLbSkXgFMB7kQhD6bO7NXmGU8VUDxJN5liRQI5jNpB31Iuj1ZXJfODpHhnj4otzMudYOBmSMRJOiCwXkqmQy6DiuUcz9i1JlAU+hdunMiAxLotIGa1DDm259hZOd7EuyFzD5Vdq4BVxrIfLQbFOJl0NDOeyHMI3swkRzlrgAaOx7KJFJs6CBJrEIQgxiL4qn0yQL/bZj+nZnEdj2U1AH4QOGf4boxDl7pcMKYGOE+qKu50QyqtKN9AsnL9SuRWi9hKBVdmjKFyq1UpnhQZF9JDcg1ACNgZI0A/CtnPsFxpNuje+KbmeYfSRw65qpLlBXZKNE/u9kQPk3QAk9W+7eSczZOxp/OmH/842Q9ZXxLTh/8V3Va0rOcUrAhxGGUs9mRnkWuuUdKUrCVAXTlmfEmUMzfXZ5up4lpHal43KoH+BfKvmjGyXzPUAAAAAElFTkSuQmCC"/>
              
              <input
                className="editSection__details-input"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </label>
            <div>
              <button onClick={() => sendEditPost()}>Save</button>
              <button onClick={() => setShow(!show)}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="home_postsSection">
          <div className="home_postsSection-newPost">
            <textarea
              placeholder="What's happening"
              onChange={(e) => (postDetails.content = e.target.value)}
            ></textarea>
            <label>
            <img alt="gallerySymbol" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1BJREFUSEudVz1v01AUPccRHZCIm8aVEEhQhDpTWBgQamFiBBYkFvoTKiYmmk6wMLAyZSlsCH5B07kDSMBelg7FSZ0MLC2+yM9+znt+z07AQxs9X99zP8491ya8FwGI/5Zx2mhl3vT85nwQU7Spvf2kH6fZpvTqD6I4Vf/qHdWVZ/oYQUhZx+zcuk5O5OoZcK2xzlkXqP54zVqCUaeDb6Qyqm2muiEiwWiC9xA8sf3VAzQFJ4IvZy08uHiBx8pfJYQ8ZAKjRJ4KsKud/RecW4m33ZBbFrDROYU1HMtLADszqVw1MCOsAJOy120H93NquPzQwD0A280Z19fBuSOquvvRIjfyjOcCztiXsdC4fJ4zi7pYCuDlRW5Y7dWl1nEMx5JnXDiap8dTG7+1SJGxmYAFTGCYpD0Bt/WUNALXZV/pvxe4sCmrORynPYBlj50qu4w9ALEAwY26epfAteOUs7onwLZfEhyuJ0GKmwA6KXEASssnJhmw02M3YxPYbrQApwQCAC1FFOJR1Oan7Gc8kVcUeVEHrFitxcIQzHxJqB5LVuaMYLmS2aq4BagMnwHIRUHbiSyMJvgOYNUZ8Qq5qovEM8fTcSLweSnkwySR63+I3aU27pI8zTPMByUey+2AeL0U8l45rzPWnkGuYpzssH8GKdY6HSbZ8dGRnL98ib9zuGLbFADxiTyOOvw4U/ksycxLbSkXgFMB7kQhD6bO7NXmGU8VUDxJN5liRQI5jNpB31Iuj1ZXJfODpHhnj4otzMudYOBmSMRJOiCwXkqmQy6DiuUcz9i1JlAU+hdunMiAxLotIGa1DDm259hZOd7EuyFzD5Vdq4BVxrIfLQbFOJl0NDOeyHMI3swkRzlrgAaOx7KJFJs6CBJrEIQgxiL4qn0yQL/bZj+nZnEdj2U1AH4QOGf4boxDl7pcMKYGOE+qKu50QyqtKN9AsnL9SuRWi9hKBVdmjKFyq1UpnhQZF9JDcg1ACNgZI0A/CtnPsFxpNuje+KbmeYfSRw65qpLlBXZKNE/u9kQPk3QAk9W+7eSczZOxp/OmH/842Q9ZXxLTh/8V3Va0rOcUrAhxGGUs9mRnkWuuUdKUrCVAXTlmfEmUMzfXZ5up4lpHal43KoH+BfKvmjGyXzPUAAAAAElFTkSuQmCC"/>
              
              <input
                className="editSection__details-input"
                onChange={(e) => (postDetails.img = e.target.files[0])}
                type="file"
              ></input>
            </label>
            <button onClick={() => checkValue()}>Post</button>
          </div>
          <div className="home_postsSection-filters">
            <button onClick={() => Trending()}>Trending🔥🔥</button>
            <button onClick={() => sortByDate()}>Sort By Date</button>
          </div>

          {PostsData.map((val) => (
            <ul key={val._id} className="home__postsSection__posts">
              <li className="home__postsSection__posts-fName">
                <img
                  onClick={() => nav(`/Profile1/${val.username}`)}
                  src={userAvatars(val.username)}
                ></img>
                
                 <p style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                 <p>{val.firstName}</p>  
                <span>{val.username}</span>
                 </p>
                <p style={{display:val.username===loggedInUser.username?"block":"none",marginLeft: "150px" }} className="dotsForFunc" >
                  <svg
                    onClick={() =>
                      showEdit === val._id
                        ? setShowEdit("")
                        : setShowEdit(val._id)
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
                  <li
                    style={{ display: val._id === showEdit ? "block" : "none" }}
                  >
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
                  ></img>
                ) : null}
              </li>
              <li onClick={() => nav(`/PostDetails/${val._id}`)} className="home__postsSection__posts-Content">
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
        <section className="rightPane">
        <Suggested></Suggested>
        </section>
      </section>
    </div>
  );
}
