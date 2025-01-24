

/// global scopes
const a =100;
let b = 300;
var c =500;

if(true){
    // block scopes
    const a =10;
    let b=30;
    var c=50;
    console.log("inner A", a);
    console.log("inner B", b);
    console.log("inner c", c);

}
console.log("outer A",a);
console.log("outer B",b);
console.log("outer C", c);
