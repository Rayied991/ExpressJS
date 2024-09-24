// (function (exports,require,module,__filename,__dirname) {
    const people = ['Sakib', 'tamim', 'Mushfiq'];

    const a = 6;
    function Test() {
        console.log("Test");
    }
    console.log(module);
    //single export
    // module.exports = people;

    //multiple exports
    module.exports={
        // people:people,
        // a:a,
        // Test:Test
        people,
        a,
        Test
    }
    console.log(module);


//     return module.exports;

// });



//efee
// (function (){
//     var a=5;
// })();