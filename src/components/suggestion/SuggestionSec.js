import "./Suggestionsec.css"
import { MainContext } from "../../Services/Context/MainReducer"
import { FollowContext } from "../../Services/HelperFunc/FollowFunc"
import { UsersContext } from "../../Services/HelperFunc/UsersFunc"
import { useContext } from "react"
export function Suggested()
{
    const {Users}=useContext(MainContext)
    const {setFollowers,setUnFollowers}=useContext(FollowContext)
    const {followersExist}=useContext(UsersContext)
    return(<div>
        <section>
        <div className="Suggest_followers">
                <h1>Suggested Users</h1>
            {Users.map((val)=><ul key={val._id}>
                    <p><li>{val.firstName}</li>
                    <span   >{val.username}</span></p>
                    
                    <button onClick={()=>followersExist(val.username)?setUnFollowers(val._id):setFollowers(val._id)}>{followersExist(val.username)?"unfollow":"Follow"}</button>
                </ul>)}
            </div>
        </section>
               </div>)
}