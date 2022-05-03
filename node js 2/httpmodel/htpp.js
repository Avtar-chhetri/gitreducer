const http=require("http")
const port =8000;
const fs=  require("fs")


const ojs=[

    {
        name:"bibek",
        age:50,
        address:"bhartepur",
    },

    {
        name:"asim",
        age:21,
        address:"bhartepur-8",
    },
]


// const objs=JSON.stringify(ojs)
// console.log(objs)

const server=http.createServer((req,res)=>{

    // res.end("tihis is our home ")

    // fs.writeFile("bson.json", objs,(err)=>{

    //     console.log("this sucess")
    //     console.log(err)
    // })

  if(req.url==="/"){

    fs.readFile("home.json","utf-8",(err,data)=>{
        console.log(data)

        const bdata=JSON.parse(data)
        res.end(bdata[1].name)
    })
 }

 else if(req.url==="/about"){


    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>this is asim</h1>")

 }

    // 
})



server.listen(port ,()=>{

    console.log(`this is server from port ${port}`)
})







// fs.writeFile("home.json",objs,(err)=>{

// console.log("sucess to create file")
// })


// fs.readFile("home.json",(err,data)=>{
//     console.log(data)
// })


