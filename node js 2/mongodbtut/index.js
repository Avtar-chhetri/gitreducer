const async = require("hbs/lib/async");
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/test1",{

    
}).then(()=>{

    console.log("this sucess fully connects db")
}).catch((err)=>{

    console.log(err)
});


// define structer of documments


const palyListSchema= new mongoose.Schema({

    name:{
        type:String,
        require:true,
    },
    ctype:String,
    video:Number,
    active:Boolean,

    date:{

        type:Date,
        default:Date.now
    }
})

// crteatings collections
const palylist=new mongoose.model("palylist",palyListSchema)


//create and insert documments

const createDocuments=async()=>{

try{
const reactsPlaylist= new palylist({
    name:"Reacts js",
    ctype:"fend",
    video:80,
    active:true,
})

const nodeJS= new palylist({
    name:"node js",
    ctype:"back",
    video:10,
    active:true,
})
const result =await palylist.insertMany([reactsPlaylist,nodeJS]); //insert or save quiirey write your all querry heare
console.log(result)
}

    catch(err){

        console.log(err)
        console.log("schema not define proper")
    }
}


createDocuments();
  



//db name            test 
//collections name   playList
// documents         0000000


// algo of connections db
// make connections of the db 
// define structer of documments calleds Schema
// crteatings collections
//create and insert documments wrapp in ayns fun
//insert or save quiirey 