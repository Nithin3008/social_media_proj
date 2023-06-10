import { useState,useContext } from "react"
import { AuthContext } from "../../Services/HelperFunc/AuthFunc"
import pic1 from "../../pages/Sign_up/tanjiro.jpg"
import "./signup.css"
export function Sign_up()
{
    const [show,setShow]=useState(false)
    const {Signup}=useContext(AuthContext)
    function onSubmit(event)
    {
      event.preventDefault()
      const usdDetails={
        fName:event.target.firstName.value,
        lName:event.target.lastName.value,
        userName:event.target.userName.value,
        pwd:event.target.pwd.value
      }  
      Signup(usdDetails)
    }
    return(<div>
        <section className="signUp">
            <div className="signup__image">
            <img src={pic1} alt="" />
            </div>
            <div className="signup__form">
                <h1>AnimeVerse</h1>
                <h2>Sign-Up</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <p>First Name</p>
                    <input id="firstName" type="name" placeholder="first name" required></input>
                    <p>Last Name</p>
                    <input id="lastName" type="name" placeholder="last name" required></input>
                    <p>Email</p>
                    <input id="userName" type="text" placeholder="user name" required></input>
                    <p> Password</p>
                    <input type={show?"text":"password"} required></input><svg onClick={()=>setShow(!show)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg>
                    <p>Confirm Password</p>
                    <input id="pwd" type={show?"text":"password"} required></input><svg onClick={()=>setShow(!show)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg>
                    <div className="signup__form-signupBtn">
                    <button type="submit">SignUp!</button>
                    </div>
                </form>
            </div>
        </section>
    </div>)
}
