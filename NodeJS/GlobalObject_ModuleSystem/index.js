// console.log(window);//its not available in nodejs

//its available in browser and also in nodejs
//global object
// setTimeout(()=>{
//     console.log("Test");
// },1000);

//Global object(instead of window)
// var a=5;

console.log(global);
// console.log(global.a);


console.log(__dirname);
console.log(__filename);
//these 2 are not available in global
