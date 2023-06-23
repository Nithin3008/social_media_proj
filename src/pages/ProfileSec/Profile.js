import { useParams } from "react-router";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { MainContext } from "../../Services/Context/MainReducer";
import { useContext } from "react";
import "./profile.css";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { FollowContext } from "../../Services/HelperFunc/FollowFunc";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import { useNavigate } from "react-router";
import { useState } from "react";
export function Profile1() {
  const { ProfileId } = useParams();
  const { Users, Posts, loggedInUser } = useContext(MainContext);
  const { setFollowers, setUnFollowers } = useContext(FollowContext);
  const { editUsers } = useContext(UsersContext);
  const { followersExist } = useContext(UsersContext);
  const profileData =Users.find((val) => val.username === ProfileId);
  const postsData = Posts.filter((val) => val.username === ProfileId);
  const {
    likePosts,
    checkLikes,
    unLikePosts,
    addBookmark,
    checkBookMarks,
    removeBookmark,
  } = useContext(PostsContext);
  const [edit, showEdit] = useState(true);
  const nav = useNavigate();
  const [inputValue, setInput] = useState(profileData?.bio);
  const [portfolioValue, setPortfolio] = useState(profileData?.portfolio);
  const [img1, setImg] = useState({});
  function sendData() {
    const x = {
      ...profileData,
      bio: inputValue,
      portfolio: portfolioValue,
      img: img1,
    };
    console.log(x);
    editUsers(x);
    showEdit(!edit);
  }
  console.log(ProfileId,profileData,inputValue,portfolioValue)
  return (
    <>
      <section className="ProfileSec">
        <RouteSec></RouteSec>
        <div
          className="editSection"
          style={{ display: edit ? "none" : "block" }}
        >
          <div className="editSection__details">
            <label>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1BJREFUSEudVz1v01AUPccRHZCIm8aVEEhQhDpTWBgQamFiBBYkFvoTKiYmmk6wMLAyZSlsCH5B07kDSMBelg7FSZ0MLC2+yM9+znt+z07AQxs9X99zP8491ya8FwGI/5Zx2mhl3vT85nwQU7Spvf2kH6fZpvTqD6I4Vf/qHdWVZ/oYQUhZx+zcuk5O5OoZcK2xzlkXqP54zVqCUaeDb6Qyqm2muiEiwWiC9xA8sf3VAzQFJ4IvZy08uHiBx8pfJYQ8ZAKjRJ4KsKud/RecW4m33ZBbFrDROYU1HMtLADszqVw1MCOsAJOy120H93NquPzQwD0A280Z19fBuSOquvvRIjfyjOcCztiXsdC4fJ4zi7pYCuDlRW5Y7dWl1nEMx5JnXDiap8dTG7+1SJGxmYAFTGCYpD0Bt/WUNALXZV/pvxe4sCmrORynPYBlj50qu4w9ALEAwY26epfAteOUs7onwLZfEhyuJ0GKmwA6KXEASssnJhmw02M3YxPYbrQApwQCAC1FFOJR1Oan7Gc8kVcUeVEHrFitxcIQzHxJqB5LVuaMYLmS2aq4BagMnwHIRUHbiSyMJvgOYNUZ8Qq5qovEM8fTcSLweSnkwySR63+I3aU27pI8zTPMByUey+2AeL0U8l45rzPWnkGuYpzssH8GKdY6HSbZ8dGRnL98ib9zuGLbFADxiTyOOvw4U/ksycxLbSkXgFMB7kQhD6bO7NXmGU8VUDxJN5liRQI5jNpB31Iuj1ZXJfODpHhnj4otzMudYOBmSMRJOiCwXkqmQy6DiuUcz9i1JlAU+hdunMiAxLotIGa1DDm259hZOd7EuyFzD5Vdq4BVxrIfLQbFOJl0NDOeyHMI3swkRzlrgAaOx7KJFJs6CBJrEIQgxiL4qn0yQL/bZj+nZnEdj2U1AH4QOGf4boxDl7pcMKYGOE+qKu50QyqtKN9AsnL9SuRWi9hKBVdmjKFyq1UpnhQZF9JDcg1ACNgZI0A/CtnPsFxpNuje+KbmeYfSRw65qpLlBXZKNE/u9kQPk3QAk9W+7eSczZOxp/OmH/842Q9ZXxLTh/8V3Va0rOcUrAhxGGUs9mRnkWuuUdKUrCVAXTlmfEmUMzfXZ5up4lpHal43KoH+BfKvmjGyXzPUAAAAAElFTkSuQmCC"/>
              <input
                type="file"
                className="editSection__details-input"
                onChange={(e) => setImg(e.target.files[0])}
              ></input>
            </label>
            <div className="editSection__details-info">
              <p>Bio</p>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={inputValue}
                type="text"
              ></input>
              <p>Portfolio</p>
              <input
                onChange={(e) => setPortfolio(e.target.value)}
                type="text"
                value={portfolioValue}
              ></input>
            </div>
            <div>
              <button onClick={() => sendData()}>Save</button>
              <button onClick={() => showEdit(!edit)}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="ProfileSec_about">
          <div className="ProfileSec_about_details">
            <div>
              <img src={profileData.avatar}></img>
            </div>
            <div className="about_details">
              <p className="details_name">
                {profileData.firstName} {profileData.lastName}
              </p>
              <p className="details_bio">{profileData.bio}</p>
              <p className="details_portfolio">
                <a href={profileData.portfolio} target="_blank">
                  More about me...
                </a>{" "}
                <span>
                  {new Date(profileData.createdAt).toDateString().slice(4, 15)}
                </span>
              </p>
              <p className="details_otherData">
                Followers: {profileData.followers.length} Following:{" "}
                {profileData.following.length} Posts: {postsData.length}
              </p>
            </div>
            <div className="ProfileSec_about_details--buttons">
              <button
                style={{
                  display:
                    profileData.username === loggedInUser.username
                      ? "inline"
                      : "none",
                }}
                onClick={() => showEdit(!edit)}
              >
                Edit Profile
              </button>
              <button
                style={{
                  display:
                    profileData.username === loggedInUser.username
                      ? "none"
                      : "inline",
                }}
                onClick={() =>
                  followersExist(profileData.username)
                    ? setUnFollowers(profileData._id)
                    : setFollowers(profileData._id)
                }
              >
                {followersExist(profileData.username) ? "unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <hr></hr>
          {postsData.map((val) => (
            <ul key={val._id} className="ProfileSec__postsSection__posts">
              <li className="ProfileSec__postsSection__posts-fName">
                {val.firstName} <span>{val.username}</span>
              </li>
              <li>
                {val.img ? (
                  <img
                    alt="postsImg"
                    src={val.img}
                    onClick={() => nav(`/PostDetails/${val._id}`)}
                  ></img>
                ) : null}
              </li>
              <li onClick={() => nav(`/PostDetails/${val._id}`)} className="ProfileSec__postsSection__posts-Content">
                {val.content}
              </li>
              <li className="ProfileSec__postsSection__posts-button">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fa005a"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
