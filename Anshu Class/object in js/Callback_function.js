function f1(){
    console.log("i am new ");
}
function f2(f1){
    console.log("i am new call back");// callback function call firstly f2 then f1
    f1();
}
f2(f1);

