const dotenv = require('dotenv');
dotenv.config();

const favoriteshow = process.env.Fav_Show

console.log("Best show of all time, should've won an oscar,", favoriteshow)