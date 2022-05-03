//this is is operatings nodejs connectiomms area

const express = require("express")
const path = require("path")
const app = express();
const port = 8000;
const hbs = require("hbs")


const templetepath = path.join(__dirname, "../server/components");
console.log(templetepath)

const partialspath = path.join(__dirname, "../server/partials");
console.log(partialspath)


app.set('view engine', "hbs");           //this is for templete engines
app.set("views", templetepath)           //change the name of folder from views to components
hbs.registerPartials(partialspath)      // to use partials components

// this is for home
app.get("/", (req, res) => {
    res.render("home.hbs")
})


// this is for about
app.get("/about", (req, res) => {
    res.render("about.hbs")
})


// this is for weather
app.get("/weather", (req, res) => {
    res.render("weather.hbs")
})



app.listen(port, () => {
    console.log(`this server is run from ${port}`)
})