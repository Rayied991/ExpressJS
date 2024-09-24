const people=require('./people');
const _ =require('lodash');//external module[npm i lodash]
console.log(people);
console.log(people.people);
console.log(people.a);
console.log(people.Test);
people.Test();
console.log(_.last(people.people));