const http = require('http');
const fs = require('fs'); //Permite manipular arquivos

const hostname = "127.0.0.1";
const port = 3000; // Porta do servidor
 
const server = http.createServer((req,res)=>{ //Cria servidor local

    if(req.url == '/andrade'){ // Verifica se 

        fs.readFile('index.html',function(err,data){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
            
        })
    }else{

        return res.end();
    }
    
})

server.listen(port,hostname,()=>{

    console.log('vamobora');
})




