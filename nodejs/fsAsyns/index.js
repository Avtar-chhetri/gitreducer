const fs = require("fs")


fs.writeFile("maio.txt","hello async",(err)=>{

console.log("file creates")
console.log(err)

})


// fs.appendFile("maio.txt","allow add",(err)=>{


//     console.log("file apppend")
//     console.log(err)
// })



// const data=fs.readFile("maio.txt",(err)=>{


//     console.log(err)
//     console.log("file read")
// })

// console.log(data)


// fs.rename("maio.txt","bio.txt",(err)=>{

//     console.log("sucess")

//     console.log(err)
// })


// fs.unlink("bio.txt",(err)=>{

//     console.log("delete")
// })




fs.mkdir("os/osmode.js","hello bibek",(err)=>{

    console.log("sucess")
})

