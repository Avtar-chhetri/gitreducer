// // // const express = require('express')
// // // const app = express()


// // // app.get('/', (req, res) => {
// // //   res.send('Hello World!')
// // // })

// // // app.listen(8000, () => {
// // //   console.log(`Example app listening on port 8000`)
// // // })


// // const express = require("express")
// // const path = require("path")
// // const app = express();
// // const port =3000;




// // console.log(path.join(__dirname,"../public"))

// // const staticspath=path.join(__dirname,"../public");


// // app.use(express.static(staticspath))

// // app.get("/",(req,res)=>{
// //     res.send("hello bibek how are you")
// // })


// // app.get("/about",(req,res)=>{
// //     // res.send(" welcome to the about")
// //     // res.send(" welcome to the about") 
// //     res.write(" <h1>this  is h1</h1>")
// //     res.send()

// // })



// // app.get("/contact",(req,res)=>{
// //     res.status(200).send(" welcome to the contact")
// // })



// // app.get("/temp",(req,res)=>{
// //     res.json([

// //         {"id":"1",
// //           "name":"bibek",
// //           "class":"10",
// //         },

// //         {"id":"1",
// //         "name":"santosh",
// //         "class":"10",
// //       }
// //     ])


// // })





// // app.listen(port,"127.0.0.1",()=>{

// //     console.log(` this is run from port ${port}`)
// // })



// // const express=require("express");
// // const { truncateSync } = require("fs");
// // const app =express();
// // const path=require("path")
// // const port=3000;





// // const pathname=path.join(__dirname,"../public")
// // console.log(pathname)

// // const staticPath=path.join(__dirname,"../server");
// // app.set('views',staticPath);


// // // // app.use(express.static(pathname))
// // // app.use(express.static(pathname))


// // app.set('view engine',"hbs")


// // app.get("",(req,res)=>{

// //     res.render("index",{
// //         status:"logout",
// //     })
// //     // res.render("index")
// // })


// // app.get("/about",(req,res)=>{

// //     res.render("about.hbs")
// // })



// // app.get("/contact",(req,res)=>{

// //     res.render("contact.hbs")
// // })

// // // app.get("/",(req,res)=>{

// // //     res.send("hello bihbek how are you")
// // // })



// // app.get("/about",(req,res)=>{


// //     res.send("this is about page")
// // })
// // app.listen(port,()=>{


// //     console.log(`sucess to login port  nunmer ${port}`)
// // })



// const express =require("express")
// const app =express();
// const port =3000;
// const path =require("path")
// const hbs=require("hbs")

// const paths=path.join(__dirname,"../server")
// const partialpaths=path.join(__dirname,"../server/partials")
// console.log(partialpaths)
// app.set('view engine',"hbs");
// app.set("views",paths)

// hbs.registerPartials(partialpaths)

// app.get("/",(req,res)=>{

//     res.render("index.hbs")
// })



// app.get("/about",(req,res)=>{

//     res.render("about.hbs")
// })



// // app.get("/about/*",(req,res)=>{

// //     res.render("404",{

// //         errorname:"this about 404 is the errore"
// //     })
// // })



// // app.get("*",(req,res)=>{

// //     res.render("404",{

// //         errorname:"this is the errore global error"
// //     })
// // })

// app.get("/about/*",(req,res)=>{

//     res.render("404",{

//         errrorcomments:"this is the abouts error "
//     })
// })

// app.get("*",(req,res)=>{


//     res.render("404",{

//         errrorcomments:"this is the global errors 404"
//     })
// })




// app.listen(port ,()=>{

//     console.log("port number 0977")
// })





const express =require("express")
const app=express();   //store express in app variable
const PORT=3000;       //this is you server port  

const path=require("path")




//home page 
app.get("/",(req,res)=>{

    res.send("hello express")
})



//this is about pade
app.get("/about",(req,res)=>{
    res.status(422).send("hello express about page")
})


app.get("/about/*",(req,res)=>{
    res.status(422).send("hello express about error")
})


// global error 4004
app.get("*",(req,res)=>{
    res.status(422).send("404 erro global ")
})


app.listen(PORT,()=>{

    console.log(`this server is running from ${PORT}`)
})