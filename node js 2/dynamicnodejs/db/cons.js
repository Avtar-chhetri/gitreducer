const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/itgarage1",{

    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology:true,


}).then(()=>{

    console.log("connections sucess full my babyyy")
}).catch((err)=>{

    console.log(err)
    console.log("this is connections errors ")
})

