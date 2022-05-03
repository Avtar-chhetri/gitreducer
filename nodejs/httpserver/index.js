

// const http=require("http")



// const server =http.createServer((req,res)=>{

//     res.end("hello from mern side");
    
// })


// server.listen(8000,"127.0.0.1",()=>{


//     console.log("listing to the port number 8000")
// });



const http =require("http")
const fs =require("fs");
const path =require("path");


const server=http.createServer((req,res)=>{

   const data= fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
   const idata=JSON.parse(data)

    if(req.url==="/"){

        res.end("this is home page")
    }

    else if(req.url==="/about"){

        res.end("this is about page")
    }
    
    else if(req.url==="/contact"){

        res.end("this is contact page")
    }

    else if(req.url==="/userapi"){
        res.end(idata[0].name)
       console.log(idata[5].name)
         
        // fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
        //     console.log(err)
        //     console.log(data)
        //     res.end(data)
        //     const idata=JSON.parse(data)
        //     // console.log(idata.name)
        //     res.end(idata[5].name)
        // })      
    }
    else{
         
      
         res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("<h4>this is 404 errors</h4>") 
    }


   
})


server.listen(5000,"127.0.0.1",()=>{

    console.log("the server request sucess")
})