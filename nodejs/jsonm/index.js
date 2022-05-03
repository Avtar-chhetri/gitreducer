const fs =require("fs")


const objm={


    name:"bibek",
    age:20,
    address:"bnp-11",

}



const objs=JSON.stringify(objm)



fs.writeFile("json1.json" , objs,(err)=>{

// console.log("sucss")
console.log(err)

})


fs.readFile("json1.json", "utf-8" ,(err,data)=>{


     const bata=JSON.parse(data)
   console.log(bata)


})