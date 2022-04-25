import * as Guitars  from "./guitar.js";          //importing guitar.js file
import User from "./user.js";                     //importing  User class ,its default class

const me = new User("email@email.com","Dave");

console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());