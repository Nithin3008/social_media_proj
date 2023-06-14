import { useParams } from "react-router";
import { RouteSec } from "../../components/RouteSection/RouteSec";
import { MainContext } from "../../Services/Context/MainReducer";
import { useContext } from "react";
import "./profile.css"
import { Suggested } from "../../components/suggestion/SuggestionSec";
export function Profile1()
{
    const {ProfileId}=useParams()
    const {Users,Posts}=useContext(MainContext)
    const profileData=Users.find((val)=>val.username===ProfileId)
    const postsData=Posts.filter((val)=>val.username===ProfileId)
    console.log(postsData)
    return(<>
    <section className="ProfileSec">
        <RouteSec></RouteSec>
        <div className="ProfileSec_about">
                <div>
                    <h1>{profileData.firstName} {profileData.lastName}</h1>
                    <h2>{profileData.bio}</h2>
                  <p><a href={profileData.portfolio}>More about me...</a> <span>{profileData.createdAt}</span></p>  
                    <p>Followers: {profileData.followers.length} Following: {profileData.following.length} Posts:{}</p>
                </div>
                <hr></hr>
        </div>
        <Suggested></Suggested>
    </section>
    </>)
}