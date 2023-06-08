import { useState } from "react"
import pic1 from "../../pages/Login/itachi.jpg"

import "./Login.css"
import { Link } from "react-router-dom"
export function Login1()
{
    const [show,setShow]=useState(false)
        return(<div>
        <section className="login">
            <div className="login__image">
                <img src={pic1}></img>
            </div>
        <div className="login__enterDetails">
            <h1>AnimeVerse</h1>
            <label>Email:<input type="text" placeholder="Email" /></label>
            <label>Password:<input type={show?"text":"password"} placeholder="Email" /></label>
            <div>
            <button>Login</button>
            <button>Guest Login</button>
            </div>
            <p>New User? Create Account <Link>Signup!</Link> </p>
        </div>
        </section>





    </div>)
}