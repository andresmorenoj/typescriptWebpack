import Dog from "./Dog.js";
import {add, divide, multiple} from './utils.js';
import ShelterDog from "./ShelterDog.js";

const elton = new Dog('elton', 'Aussie', 5);
elton.bark(); 

console.log(add(3, 5));
console.log(divide(30, 5));
console.log(multiple(13, 5));

const buffy = new ShelterDog('Buggy', 'pitbull', 5, 'Desert spring');
buffy.bark();