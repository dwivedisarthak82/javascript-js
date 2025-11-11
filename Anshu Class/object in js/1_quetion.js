let user = {
    name:"srk",
    email:"dwivedisarthja83@gmill.com",
    age: 20

};

function format(obj){
    return `Name: ${obj.name} ,Age: ${obj.age}`;
}

console.log(format(user));