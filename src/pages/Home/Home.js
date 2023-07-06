import { useContext } from "react";
import { MainContext } from "../../Services/Context/MainReducer";
import "./home.css";
import { PostsContext } from "../../Services/HelperFunc/PostFunc";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { toast } from "react-toastify";
import { PostsTotalData } from "../../components/Posts/PostsData";
import "react-toastify/dist/ReactToastify.css";
import { RouteMini } from "../../components/RouteSecMini/RouteMini";

export function Home1() {
  const { Posts, loggedInUser, loggedInUserFollwers } = useContext(MainContext);
  const { uploadNewPost, sortByDate, Trending } = useContext(PostsContext);
  const postsD = [...Posts].filter(
    (val) => val.username == loggedInUser.username
  );
  const postFollow = [...Posts].filter((posts) =>
    loggedInUserFollwers.find((user) => user.username === posts.username)
  );
  const PostsData = [...postsD, ...postFollow];
  const postDetails = {
    comment: [],
    firstName: loggedInUser.firstName,
    img: "",
    content: "",
  };
  function checkValue() {
    postDetails.img.length > 0 || postDetails.content.length > 0
      ? uploadNewPost(postDetails)
      : toast.error(`please fill something`, {
          position: "bottom-right",
        });
  }
  return (
    <div>
      <section className="home">
        <section className="leftPane">
          <RouteSec></RouteSec>
        </section>
        <div className="home_postsSection">
          <div className="home_postsSection-newPost" data-aos={"slide-down"}>
            <textarea
              placeholder="What's happening"
              onChange={(e) => (postDetails.content = e.target.value)}
            ></textarea>
            <label>
              <img
                alt="gallerySymbol"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1BJREFUSEudVz1v01AUPccRHZCIm8aVEEhQhDpTWBgQamFiBBYkFvoTKiYmmk6wMLAyZSlsCH5B07kDSMBelg7FSZ0MLC2+yM9+znt+z07AQxs9X99zP8491ya8FwGI/5Zx2mhl3vT85nwQU7Spvf2kH6fZpvTqD6I4Vf/qHdWVZ/oYQUhZx+zcuk5O5OoZcK2xzlkXqP54zVqCUaeDb6Qyqm2muiEiwWiC9xA8sf3VAzQFJ4IvZy08uHiBx8pfJYQ8ZAKjRJ4KsKud/RecW4m33ZBbFrDROYU1HMtLADszqVw1MCOsAJOy120H93NquPzQwD0A280Z19fBuSOquvvRIjfyjOcCztiXsdC4fJ4zi7pYCuDlRW5Y7dWl1nEMx5JnXDiap8dTG7+1SJGxmYAFTGCYpD0Bt/WUNALXZV/pvxe4sCmrORynPYBlj50qu4w9ALEAwY26epfAteOUs7onwLZfEhyuJ0GKmwA6KXEASssnJhmw02M3YxPYbrQApwQCAC1FFOJR1Oan7Gc8kVcUeVEHrFitxcIQzHxJqB5LVuaMYLmS2aq4BagMnwHIRUHbiSyMJvgOYNUZ8Qq5qovEM8fTcSLweSnkwySR63+I3aU27pI8zTPMByUey+2AeL0U8l45rzPWnkGuYpzssH8GKdY6HSbZ8dGRnL98ib9zuGLbFADxiTyOOvw4U/ksycxLbSkXgFMB7kQhD6bO7NXmGU8VUDxJN5liRQI5jNpB31Iuj1ZXJfODpHhnj4otzMudYOBmSMRJOiCwXkqmQy6DiuUcz9i1JlAU+hdunMiAxLotIGa1DDm259hZOd7EuyFzD5Vdq4BVxrIfLQbFOJl0NDOeyHMI3swkRzlrgAaOx7KJFJs6CBJrEIQgxiL4qn0yQL/bZj+nZnEdj2U1AH4QOGf4boxDl7pcMKYGOE+qKu50QyqtKN9AsnL9SuRWi9hKBVdmjKFyq1UpnhQZF9JDcg1ACNgZI0A/CtnPsFxpNuje+KbmeYfSRw65qpLlBXZKNE/u9kQPk3QAk9W+7eSczZOxp/OmH/842Q9ZXxLTh/8V3Va0rOcUrAhxGGUs9mRnkWuuUdKUrCVAXTlmfEmUMzfXZ5up4lpHal43KoH+BfKvmjGyXzPUAAAAAElFTkSuQmCC"
              />

              <input
                className="editSection__details-input"
                onChange={(e) => (postDetails.img = e.target.files[0])}
                type="file"
              ></input>
            </label>
            <button onClick={() => checkValue()}>Post</button>
          </div>
          <div className="home_postsSection-filters">
            <button onClick={() => Trending()} data-aos={"fade-right"}>
              Trending🔥🔥
            </button>
            <button onClick={() => sortByDate()} data-aos={"fade-left"}>
              Sort By Date
            </button>
          </div>
          <PostsTotalData posts={PostsData}></PostsTotalData>
        </div>
        <section className="rightPane">
          <Suggested></Suggested>
        </section>
      </section>
      <section className="routeSec__Mini">
        <RouteMini></RouteMini>
      </section>
    </div>
  );
}
