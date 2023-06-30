import { MainContext } from "../../Services/Context/MainReducer";
import { useContext } from "react";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import "./explore.css";
import { PostsTotalData } from "../../components/Posts/PostsData";
export function Explore1() {
  const { Posts } = useContext(MainContext);
  const PostsData = [...Posts];
  return (
    <div>
      <section className="Explore">
        <section className="leftPane">
          <RouteSec></RouteSec>
        </section>
        <div className="Explore_postsSection">
          <PostsTotalData posts={PostsData}></PostsTotalData>
        </div>
        <section className="rightPane">
          <Suggested></Suggested>
        </section>
      </section>
    </div>
  );
}
