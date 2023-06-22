import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../Context/MainReducer";
export const FollowContext = createContext();
export function FollowProvider({ children }) {
  const encodedToken = localStorage.getItem("token");
  const { dispatcherMain, loggedInUserFollwers } = useContext(MainContext);
  useEffect(() => {
    const intialData1 = async () => {
      const resUsers = await axios.get("/api/users");
      dispatcherMain({ type: "getUsers", payload: resUsers.data.users });
    };
    intialData1();
  }, [loggedInUserFollwers]);
  function setFollowers(followUserId) {
    const setFollow = async () => {
      try {
        const response = await axios.post(
          `/api/users/follow/${followUserId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          toast.success(`You following a new user`, {
            position: "top-center",
          });
        }

        dispatcherMain({ type: "userDetails", payload: response.data.user });
        dispatcherMain({
          type: "AddFollowing",
          payload: response.data.user.following,
        });
        //   fetchUsers()
        console.log(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    setFollow();
  }

  function setUnFollowers(followUserId) {
    const setUnFollow = async () => {
      try {
        const response = await axios.post(
          `/api/users/unfollow/${followUserId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          toast.warning(`You unfollowing user`, {
            position: "top-center",
          });
        }

        dispatcherMain({ type: "userDetails", payload: response.data.user });
        dispatcherMain({
          type: "AddFollowing",
          payload: response.data.user.following,
        });
      } catch (error) {
        console.log(error);
      }
    };
    setUnFollow();
  }
  return (
    <>
      <FollowContext.Provider value={{ setFollowers, setUnFollowers }}>
        {children}
      </FollowContext.Provider>
    </>
  );
}
