const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{
    console.log("connected to mongo db is succesfull");
}).catch((err)=>{
    console.log(err);
})

const  student = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

const stu = mongoose.model("Sample",student);

const adder = async()=>{
    //const createdocument = new stu({
    const ss= await stu.find();
    const createdocument = await stu.create({
    name:"abhi",
    age:22,
    city:"japan"

})
 //await createdocument.save();
 console.log(ss);


}
adder();



