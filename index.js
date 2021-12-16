// Primeiros Passos

const http = require('http');  //Permite Manipular Servidores Locais
const fs = require('fs'); //Permite Manipular Arquivos

const hostname = "127.0.0.1";
const port = 3000; // Porta do Servidor
 
const server = http.createServer((req,res)=>{ //Cria servidor local

    if(req.url == '/andrade'){ // Verifica se a url de acesso é "/andrade" (http://localhost:3000/andrade)

        fs.readFile('index.html',function(err,data){ //Mostra o arquivo index.html quando a página for aberta
                                                                        // através do comando "node index.js" no cmd
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
            
        })

    }else{

        return res.end(); //Sem esse código, o servidor fica carregando para sempre, caso a url não for (http://localhost:3000/andrade)
    }
    
})

server.listen(port,hostname,()=>{  // Mostra a mensagem do "console.log" no cmd quando o servidor é inciado

    console.log('O servidor está funcionando!');
})

//----------- CRIAR ARQUIVOS ------------//

// Primeiro modo:
// Se o arquivo já existir, ele é reescrito!
// O arquivo é criado no mesmo diretório do projeto

//parâmetros: fs.writeFile('nome do arquivo e extensão', 'conteudo do arquivo', 'callback, caso dê certo' );

fs.writeFile('nome.txt','teste arquivo estudo nodeJS', function(err){ //Neste caso, o callback é uma função

    if(err) throw err;
    console.log('O arquivo foi um sucesso');
})

// Segundo modo:
// Se o arquivo já existir, o conteúdo é escrito nele!

//parâmetros: fs.appendFile('nome do arquivo e extensão', 'conteudo do arquivo', 'callback, caso dê certo' );

fs.appendFile('nome.txt','adicionando conteudo', (err)=>{ //Neste caso, o callback é uma função arrow

    if(err) throw err;
    console.log('Arquivo salvo com Sucesso!');
})