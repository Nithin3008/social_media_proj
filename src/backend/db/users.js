import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vegeta",
    lastName: "Bejīta Yonsei",
    username: "PrinceVegeta",
    password: "vegetaTrunks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    bio:"Master Ultra instict",
    portfolio:"https://dragonball.fandom.com/wiki/Vegeta",
    avatar:"",
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tonyStark",
    password: "ironman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    bio:"Scientist,Philanthropist,Avengers",
    portfolio:"https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man",
    avatar:"",
  },
  {
    _id: uuid(),
    firstName: "Naruto",
    lastName: "Uzumaki",
    username: "narutoUzumaki",
    password: "boruto",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    bio:"Hokage of leaf village",
    portfolio:"https://naruto.fandom.com/wiki/Naruto_Uzumaki",
    avatar:"",
  },
  {
    _id: uuid(),
    firstName: "Kakshi",
    lastName: "Hatake",
    username: "kakshiOfTheSharigan",
    password: "sensei",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    bio:"Sensei of team-7",
    portfolio:"https://naruto.fandom.com/wiki/Kakashi_Hatake",
    avatar:"",
  },
  {
    _id: uuid(),
    firstName: "Tanjiro",
    lastName: "Kamado",
    username: "TanjiroTheSunBreather",
    password: "demonSlayer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    bio:"DemonSlayer",
    portfolio:"https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado",
    avatar:"",
  },
];
