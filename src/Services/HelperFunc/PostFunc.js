import { createContext, useContext } from "react";
import axios from "axios";
import { MainContext } from "../Context/MainReducer";
import { formatDate } from "../../backend/utils/authUtils";

export const PostsContext = createContext();
export function PostsProvider({ children }) {
  const encodedToken = localStorage.getItem("token");
  const { dispatcherMain, Posts, loggedInUser, BookMarks } =
    useContext(MainContext);
  const getPosts = () => {
    const posts = async () => {
      try {
        const response = await axios.get(`/api/posts`);

        if (response.status === 200) {
          console.log(response.data.posts);
          dispatcherMain({ type: "getPosts", payload: response.data.posts });
        }
      } catch (error) {
        console.log(error);
      }
    };
    posts();
  };
  function likePosts(postId) {
    const like = async () => {
      try {
        const response = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.posts);
        dispatcherMain({ type: "getPosts", payload: response.data.posts });
      } catch (error) {
        console.log(error);
      }
    };
    like();
  }

  function unLikePosts(postId) {
    const unLike = async () => {
      try {
        const response = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.posts);
        dispatcherMain({ type: "getPosts", payload: response.data.posts });
      } catch (error) {
        console.log(error);
      }
    };
    unLike();
  }

//creating new posts
async function uploadImage(post)
{
  try {
    const file=post.img
    console.log(file)
  console.log(file,"image path")
  const present_key="social_media_proj"
  const formData=new FormData()
  formData.append('file',file)
  formData.append('upload_preset',present_key)
    if(post.img)
    {
      const res=await fetch(`https://api.cloudinary.com/v1_1/king-cloud/image/upload`,{
      method:"POST",
      body:formData
    })
    const x=await res.json()
    console.log(x.url)
    post.img=x.url
    }
    else
    {
      return {...post,img:null}
    }
  } catch (error) {
    console.log(error)
    }

    return post
}
  const newpost=async(post)=>
  {
  try {
    const response=await axios.post("/api/posts",{
      postData: post,
    },{
      headers: {
        authorization: encodedToken,
      },
    })
    if(response.status===201)
    {
      return response.data.posts
    }
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  
}

async function uploadNewPost(post)
{
  const result1=await uploadImage(post)
  console.log(result1)
  const result2=await newpost(result1)
  dispatcherMain({type:"getPosts",payload:result2})
}








  const edit=async(Post)=>
  {
    try {
      const response=await axios.post(`/api/posts/edit/${Post._id}`,{postData:Post},
        {
          headers: {
            authorization: encodedToken,
          },
        })
        if(response.status===201)
        {
          return response.data.posts
        }
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  }



  async function editPost(editPost)
  {
    const result1=await uploadImage(editPost)
    console.log(result1)
    const result2=await edit(result1)
    console.log(result2)
    dispatcherMain({type:"getPosts",payload:result2})
  }








  function checkLikes() {
    const x = [...Posts].map((post) =>
      post?.likes?.likedBy.find(
        (user) => user.username === loggedInUser.username
      ) === undefined
        ? false
        : post._id
    );
    
    return x;
  }

  //////////////BookMark-Section////////////////////////////////
  function intialBookMarks() {
    const getBooks = async () => {
      try {
        const response = await axios.get("/api/users/bookmark", {
          headers: {
            authorization: encodedToken,
          },
        });
        console.log(response.data);
        dispatcherMain({
          type: "AddBookmarks",
          payload: response.data.bookmarks,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }
  function addBookmark(postId) {
    const addBook = async () => {
      try {
        const response = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.bookmarks);
        let book=response.data.bookmarks
        const bookMarkedPosts=Posts.filter((post)=>book.includes(post._id))
        dispatcherMain({
          type: "AddBookmarks",
          payload: bookMarkedPosts,
        });
      } catch (error) {
        console.log(error);
      }
    };
    addBook();
  }

  function removeBookmark(postId) {
    const removeBook = async () => {
      try {
        const response = await axios.post(
          `/api/users/remove-bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.bookmarks);
        dispatcherMain({
          type: "AddBookmarks",
          payload: response.data.bookmarks,
        });
      } catch (error) {
        console.log(error);
      }
    };
    removeBook();
  }

  function checkBookMarks() {
    return BookMarks.map((val) => val._id);
  }

  return (
    <>
      <PostsContext.Provider
        value={{
          getPosts,
          likePosts,
          checkLikes,
          unLikePosts,
          intialBookMarks,
          addBookmark,
          checkBookMarks,
          removeBookmark,
          editPost,
          uploadNewPost
        }}
      >
        {children}
      </PostsContext.Provider>
    </>
  );
}
