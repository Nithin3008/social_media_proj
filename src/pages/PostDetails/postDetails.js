import { RouteSec } from "../../components/RouteSection/RouteSec";
import { Suggested } from "../../components/suggestion/SuggestionSec";
import { useParams } from "react-router-dom";
export function PostDetails()
{
    const {postId}=useParams()
    console.log(postId)
    return(<>
        <section>
            <RouteSec></RouteSec>
            <div>
            <h1>this is posts pages</h1>
            </div>
            <Suggested></Suggested>
        </section>
    </>)
}