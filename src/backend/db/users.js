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
    username: "tonyStark",
    password: "ironman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Naruto",
    lastName: "Boy",
    username: "narutoUzumaki",
    password: "boruto",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kakshi",
    lastName: "Hatake",
    username: "kakshiOfTheSharigan",
    password: "sensei",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanjiro",
    lastName: "Blade",
    username: "TanjiroTheSunBreather",
    password: "demonSlayer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
