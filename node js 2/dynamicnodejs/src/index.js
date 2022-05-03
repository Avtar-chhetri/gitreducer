const express=require("express")
const app =express();
// const port =8000;
const port =process.env.PORT ||8000;
const path=require("path")
const hbs=require("hbs")


require("../db/cons")
const partilaspath=path.join(__dirname,"../server/pcom")
console.log(partilaspath)
const partilaspath2=path.join(__dirname,"../server/layout")
console.log(partilaspath2)


app.set('view engine',"hbs")
app.set ("views",partilaspath)
hbs.registerPartials(partilaspath2)


app.get("/",(req,res)=>{
    // res.send("how are you")
    res.render("home.hbs",{

        dynamic:"IT Garage"
    })
})

app.get("/about",(req,res)=>{

    res.render("about.hbs",{

        dynamic:"IT Garage/about"
    })
})

app.get("/services",(req,res)=>{

    res.render("services.hbs",{
        dynamic:"IT Garage"

    })
})


app.get("/contacts",(req,res)=>{

    res.render("contacts.hbs",{

        dynamic:"IT Garage"
    })
})

app.get("*",(req,res)=>{


    res.render("404.hbs",{
        dynamic:"IT Garage"
    })
})

app.listen(port ,()=>{


    console.log(`this serever run from port number ${port}`)
})