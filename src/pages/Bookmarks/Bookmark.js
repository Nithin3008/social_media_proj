import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { MainContext } from "../../Services/Context/MainReducer";
import { RouteMini } from "../../components/RouteSecMini/RouteMini";
import { useContext } from "react";
import "./bookmark.css";
import { PostsTotalData } from "../../components/Posts/PostsData";
export function Bookmark1() {
  const { BookMarks, Posts } = useContext(MainContext);
  const PostsData = Posts.filter((bookPosts) =>
    BookMarks.includes(bookPosts._id)
  );
  return (
    <>
      <section className="bookmark">
        <section className="leftPane">
          <RouteSec></RouteSec>
        </section>
        <div className="bookmark_postsSection">
          {BookMarks.length == 0 ? (
            <h1 className="bookMarkHeading">Bookmarks is Empty</h1>
          ) : (
            ""
          )}
          <PostsTotalData posts={PostsData}></PostsTotalData>
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
