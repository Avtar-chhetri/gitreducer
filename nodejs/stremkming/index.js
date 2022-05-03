// console.log("this is glad")


const http=require("http")
const fs=require("fs")


const server=http.createServer();
server.on('request',(req,res)=>{

// fs.readFile("index.html", "utf-8" ,(err,data)=>{
//     res.end(data)
// })

const rstrem =fs.createReadStream("index.html"); 

rstrem.on("data",(cdata)=>{

    res.write(cdata)
})


rstrem.on("end",()=>{
    res.end()
})


rstrem.on("error",(err)=>{
    res.end("file not found erroor in file")
    console.log(err)
})


// rstrem.pipe(res)


})


server.listen(8000,"127.0.0.1",()=>{
    console.log("sucess to create server")
})



