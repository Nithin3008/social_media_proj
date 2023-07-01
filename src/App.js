import "./App.css";
import { Login1 } from "./pages/Login/Login";
import { Sign_up } from "./pages/Sign_up/Signup";
import { Home1 } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./pages/PostDetails/postDetails";
import { Explore1 } from "./pages/Explore/Explore";
import { Bookmark1 } from "./pages/Bookmarks/Bookmark";
import { Profile1 } from "./pages/ProfileSec/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClearToken } from "./Clear";
function App() {
  return (
    <div className="App">
      <ClearToken></ClearToken>
      <Routes>
        <Route path="/Home1" element={<Home1 />}></Route>
        <Route path="/" element={<Login1 />}></Route>
        <Route path="/Sign_up" element={<Sign_up />}></Route>
        <Route path="/Explore1" element={<Explore1 />}></Route>
        <Route path="/Bookmark1" element={<Bookmark1 />}></Route>
        <Route path="/PostDetails/:postId" element={<PostDetails />}></Route>
        <Route path="/Profile1/:ProfileId" element={<Profile1 />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
