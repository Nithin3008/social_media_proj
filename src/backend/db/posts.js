import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Demon slayer episode Kyojuro Rengoku vs Akaza was stunning and emotional fight",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tony@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[]
  },
  {
    _id: uuid(),
    content:
      "Rewatching battle between naruto vs pain",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[]
  },
  {
    _id: uuid(),
    content:
      "waiting for Attack on Titan Final episode",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
      
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[]
  },
  {
    _id: uuid(),
    content:
      "Hope soon vegeta will get ultra instinct",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[]
  },
  {
    _id: uuid(),
    content:
      "Waiting for Satoru Gojo to unleash his full power",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[]
  },
];
