
// console.log("this is your module wrappe")
const path =require("path")

console.log(__dirname)
// console.log(__filename)

const pathname=path.join(__dirname,"./server/views")
console.log(pathname)