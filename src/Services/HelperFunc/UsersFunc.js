import { createContext, useContext } from "react";
import axios from "axios";
import { MainContext } from "../Context/MainReducer";

export const UsersContext = createContext();
export function UserProvider({ children }) {
  const { dispatcherMain, loggedInUserFollwers, Users } =
    useContext(MainContext);
  const encodedToken = localStorage.getItem("token");

  function followersExist(userId) {
    const check = loggedInUserFollwers.find((user) => user._id=== userId);
    return check === undefined ? false : true;
  }
  const dpData=[
    "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp1.jpeg?raw=true",
    "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp2.jpeg?raw=true",
    "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp3.jpg?raw=true",
    "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp4.png?raw=true",
    "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp6.jpg?raw=true",
    ,"https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp5.jpg?raw=true"
  ]
  async function uploadImage(post) {
      
        try {      
          const file = post.img;
          const present_key = "social_media_proj";
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", present_key);
          if (post.img) {
            const res = await fetch(
              `https://api.cloudinary.com/v1_1/king-cloud/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );
            const x = await res.json();
            console.log(x.url);
            post.avatar = x.url;
          } else {
            return { ...post, img: null };
          }
        } catch (error) {
          console.log(error);
        }
    
        return post;
    
  }
  const editUser = async (newDetails) => {
    try {
      const response = await axios.post(
        `/api/users/edit`,
        { userData: newDetails },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatcherMain({ type: "userDetails", payload: response.data.user });
      console.log(response.data.user)
    } catch (error) {
      console.log(error);
    }
  };
  async function editUsers(User) {
    const result1 = await uploadImage(User);
    const result2 = await editUser(result1);
  }

  function userAvatars(userName) {
    const url = Users.find((val) => val.username === userName);
    return url === undefined ? null : url.avatar;
  }
  return (
    <>
      <UsersContext.Provider value={{ followersExist, editUsers, userAvatars,dpData }}>
        {children}
      </UsersContext.Provider>
    </>
  );
}
