
const http=require("http");
const url=require("url");
const fs=require("fs");
var page=null;
const server=http.createServer((req,res)=>{
  //page=req.url;
  var name = url.parse(req.url).pathname;
  var query=url.parse(req.url).query;
  var filename="";
 
  if(name=="/home" || name=="/blog" || name=="/index1.html" || name=="/")
  filename="./index1.html";
  
  
  
  else if(((query=="role=admin")&&(name=="/admin")) || name=="/admin.html"  )
  {
     filename="./admin.html";
     
  }
  else if(name=="/admin" ||name=="/login.html")
  {
    filename="./login.html"
  }
  else
  {
    filename="./notfound.html"
  }
 console.log(name);
 
  if (name.includes('.css')) {
   
  filename="."+name;
  render(res,filename);

  }

  if(filename)
		render(res, filename);

       
   
  
 





}).listen(7000);
function render(res, htmlFile) {
    fs.stat("./"+htmlFile, (err, stats) => {
    res.statusCode = 200;
    if(htmlFile.includes(".css"))
    res.setHeader('Content-Type', 'text/css');
    else if(htmlFile.includes(".html"))
    res.setHeader('Content-Type', 'text/html');
  
    if(stats) {
       
        fs.createReadStream(htmlFile).pipe(res);
      
      } 
  })
    }