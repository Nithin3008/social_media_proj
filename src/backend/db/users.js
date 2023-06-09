import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tony@gmail.com",
    password: "ironman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Naruto",
    lastName: "Boy",
    username: "naruto@gmail.com",
    password: "boruto",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kakshi",
    lastName: "Hatake",
    username: "kakshi@gmail.com",
    password: "sensei",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanjiro",
    lastName: "BLade",
    username: "Tanjiro@gmail.com",
    password: "demonSlayer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
