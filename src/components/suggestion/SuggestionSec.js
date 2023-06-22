import "./Suggestionsec.css";
import { MainContext } from "../../Services/Context/MainReducer";
import { FollowContext } from "../../Services/HelperFunc/FollowFunc";
import { UsersContext } from "../../Services/HelperFunc/UsersFunc";
import { useContext } from "react";
import { useNavigate } from "react-router";
export function Suggested() {
  const { Users, loggedInUser } = useContext(MainContext);
  const { setFollowers, setUnFollowers } = useContext(FollowContext);
  const { followersExist } = useContext(UsersContext);
  const nav = useNavigate();
  return (
    <div>
      <section>
        <div
          className="UserProfile"
          onClick={() => nav(`/Profile1/${loggedInUser.username}`)}
        >
          <div>
            <img src={loggedInUser.avatar}></img>
          </div>
          <div>
            <p>{loggedInUser.firstName}</p>
            <p>{loggedInUser.username}</p>
          </div>
        </div>
        <div className="Suggest_followers">
          <h1>Suggested Users</h1>
          {Users.map((val) => (
            <ul key={val._id}>
              <p>
                <li>{val.firstName}</li>
                <span>{val.username}</span>
              </p>

              <button
                onClick={() =>
                  followersExist(val._id)
                    ? setUnFollowers(val._id)
                    : setFollowers(val._id)
                }
              >
                {followersExist(val._id) ? "unfollow" : "Follow"}
              </button>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
}
