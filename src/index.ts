import Dog from "./Dog";
import {add, divide, multiple} from './utils';
import ShelterDog from "./ShelterDog";

const elton = new Dog('elton', 'Aussie', 5);
elton.bark(); 

console.log(add(3, 5));
console.log(divide(30, 5));
console.log(multiple(13, 5));

const buffy = new ShelterDog('Buggy', 'pitbull', 5, 'Desert spring');
buffy.bark();