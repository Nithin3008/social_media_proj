import { useParams } from "react-router";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { MainContext } from "../../Services/Context/MainReducer";
import { useContext, useEffect } from "react";
import "./profile.css";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { FollowContext } from "../../Services/HelperFunc/FollowFunc";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import { useNavigate } from "react-router";
import { useState } from "react";
import { RouteMini } from "../../components/RouteSecMini/RouteMini";
import { PostsTotalData } from "../../components/Posts/PostsData";

export function Profile1() {
  const { ProfileId } = useParams();
  const { Users, Posts, loggedInUser } = useContext(MainContext);
  const { setFollowers, setUnFollowers } = useContext(FollowContext);
  const { editUsers, dpData } = useContext(UsersContext);
  const { followersExist } = useContext(UsersContext);
  const postsData = Posts.filter((val) => val.username === ProfileId);
  let user = Users.find((val) => val.username === ProfileId);
  const [profileData, setProfile] = useState(user);
  const [inputValue, setInput] = useState(user?.bio);
  const [portfolioValue, setPortfolio] = useState(user?.portfolio);
  useEffect(() => {
    setProfile(user);
    setInput(user.bio);
    setPortfolio(user.portfolio);
    setProfile(user);
  }, [ProfileId, Users]);
  const [edit, showEdit] = useState(true);
  const [img1, setImg] = useState();
  function sendData() {
    const x = {
      ...profileData,
      bio: inputValue,
      portfolio: portfolioValue,
      img: img1,
    };
    editUsers(x);
    showEdit(!edit);
  }
  console.log(profileData, Users);
  return (
    <>
      <section className="ProfileSec">
        <section className="leftPane">
          <RouteSec></RouteSec>
        </section>
        <div
          className="editSection"
          style={{ display: edit ? "none" : "block" }}
        >
          <div className="editSection__details">
            <div className="editSection__details__avatars">
              {dpData.map((links) => (
                <img alt="dp" onClick={() => setImg(links)} src={links}></img>
              ))}
            </div>
            <label>
              <img
                alt="gallerySymbol"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1BJREFUSEudVz1v01AUPccRHZCIm8aVEEhQhDpTWBgQamFiBBYkFvoTKiYmmk6wMLAyZSlsCH5B07kDSMBelg7FSZ0MLC2+yM9+znt+z07AQxs9X99zP8491ya8FwGI/5Zx2mhl3vT85nwQU7Spvf2kH6fZpvTqD6I4Vf/qHdWVZ/oYQUhZx+zcuk5O5OoZcK2xzlkXqP54zVqCUaeDb6Qyqm2muiEiwWiC9xA8sf3VAzQFJ4IvZy08uHiBx8pfJYQ8ZAKjRJ4KsKud/RecW4m33ZBbFrDROYU1HMtLADszqVw1MCOsAJOy120H93NquPzQwD0A280Z19fBuSOquvvRIjfyjOcCztiXsdC4fJ4zi7pYCuDlRW5Y7dWl1nEMx5JnXDiap8dTG7+1SJGxmYAFTGCYpD0Bt/WUNALXZV/pvxe4sCmrORynPYBlj50qu4w9ALEAwY26epfAteOUs7onwLZfEhyuJ0GKmwA6KXEASssnJhmw02M3YxPYbrQApwQCAC1FFOJR1Oan7Gc8kVcUeVEHrFitxcIQzHxJqB5LVuaMYLmS2aq4BagMnwHIRUHbiSyMJvgOYNUZ8Qq5qovEM8fTcSLweSnkwySR63+I3aU27pI8zTPMByUey+2AeL0U8l45rzPWnkGuYpzssH8GKdY6HSbZ8dGRnL98ib9zuGLbFADxiTyOOvw4U/ksycxLbSkXgFMB7kQhD6bO7NXmGU8VUDxJN5liRQI5jNpB31Iuj1ZXJfODpHhnj4otzMudYOBmSMRJOiCwXkqmQy6DiuUcz9i1JlAU+hdunMiAxLotIGa1DDm259hZOd7EuyFzD5Vdq4BVxrIfLQbFOJl0NDOeyHMI3swkRzlrgAaOx7KJFJs6CBJrEIQgxiL4qn0yQL/bZj+nZnEdj2U1AH4QOGf4boxDl7pcMKYGOE+qKu50QyqtKN9AsnL9SuRWi9hKBVdmjKFyq1UpnhQZF9JDcg1ACNgZI0A/CtnPsFxpNuje+KbmeYfSRw65qpLlBXZKNE/u9kQPk3QAk9W+7eSczZOxp/OmH/842Q9ZXxLTh/8V3Va0rOcUrAhxGGUs9mRnkWuuUdKUrCVAXTlmfEmUMzfXZ5up4lpHal43KoH+BfKvmjGyXzPUAAAAAElFTkSuQmCC"
              />
              <input
                type="file"
                className="editSection__details-input"
                onChange={(e) => setImg(e.target.files[0])}
              ></input>
            </label>
            <div className="editSection__details-info">
              <p>Bio</p>
              <textarea
                onChange={(e) => setInput(e.target.value)}
                value={inputValue}
                type="text"
              ></textarea>
              <p>Portfolio</p>
              <textarea
                onChange={(e) => setPortfolio(e.target.value)}
                type="text"
                value={portfolioValue}
              ></textarea>
            </div>
            <div>
              <button onClick={() => sendData()}>Save</button>
              <button onClick={() => showEdit(!edit)}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="ProfileSec_about">
          <div className="ProfileSec_about_details" data-aos={"slide-down"}>
            <div>
              {profileData.avatar ? (
                <img
                  className="ProfileSec_about__dp"
                  src={profileData.avatar}
                ></img>
              ) : null}
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
                    profileData.username !== loggedInUser.username
                      ? "inline"
                      : "none",
                }}
                onClick={() =>
                  followersExist(profileData._id)
                    ? setUnFollowers(profileData._id)
                    : setFollowers(profileData._id)
                }
              >
                {followersExist(profileData._id) ? "unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <PostsTotalData posts={postsData}></PostsTotalData>
        </div>
        <section className="rightPane">
          <Suggested></Suggested>
        </section>
        <section className="routeSec__Mini">
          <RouteMini></RouteMini>
        </section>
      </section>
    </>
  );
}
