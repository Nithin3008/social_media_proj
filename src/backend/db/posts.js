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
    firstName:"Tony",
    username: "tonyStark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[],
    following:[],
    followers:[],
    img:"https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/reng_vs_akaza.webp"

  },
  {
    _id: uuid(),
    content:
      "Rewatching battle between naruto vs pain, Naruto makes an entrance into the Hidden Leaf Village, but doesn’t recognize his surroundings. Naruto is unable to sense the Chakra of many beloved to him, including his teacher Kakashi Hatake.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Naruto",
    username: "narutoUzumaki",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[],
    following:[],
    followers:[],
    img:"https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/naruto_vs_pain.webp"
  },
  {
    _id: uuid(),
    content:
      "Waiting for Attack on Titan Final episode",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
      
    },
    firstName:"Kakshi",
    username: "kakshiOfTheSharigan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[],
    following:[],
    followers:[],
    img:"https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/eren.webp"
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
    firstName:"Tanjiro",
    username: "TanjiroTheSunBreather",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[],
    following:[],
    followers:[],
    img:"https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/vegeta.webp"
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
    firstName:"Adarsh",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comment:[],
    following:[],
    followers:[],
    img:"https://github.com/Nithin3008/social_media_proj/blob/master/public/images/Gojo.jpg?raw=true"
  },
];
