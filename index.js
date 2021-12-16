// Primeiros Passos

// ----- Módulos do NodeJS
// Para mais informações, acesse https://nodejs.org/api/modules.html

const http = require('http');  //Permite Manipular Servidores Locais
const fs = require('fs');   //Permite Manipular Arquivos
const read = require('readline') //Permite Ler Informações no Terminal

// ------- 

const hostname = "127.0.0.1";
const port = 3000;   // Porta do Servidor
 
const server = http.createServer((req,res)=>{   //Cria servidor local

    if(req.url == '/andrade'){   // Verifica se a url de acesso é "/andrade" (http://localhost:3000/andrade)

        fs.readFile('index.html',function(err,data){   //Mostra o arquivo index.html quando o servidor for aberto
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
            
        })

    }else{

        return res.end(); //Sem esse código, o servidor fica carregando para sempre, caso a url não for (http://localhost:3000/andrade)
    }
    
})

server.listen(port,hostname,()=>{  // Mostra a mensagem do "console.log" no terminal quando o servidor é inciado

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

//----------- LER ARQUIVOS ------------//

//Forma "Simples":

//parâmetros: fs.readFile('nome do arquivo e extensão', 'CallBack');

fs.readFile('nome.txt',function(err,data){         // Neste caso, o callback é uma função que retorna "err"
                                                   // em caso de erro e "data", que é o conteúdo do arquivo em si
    console.log(data.toString());                  // e deve ser convertido para String
})

//Forma "Avançada":

//parâmetros: fs.readFile('nome do arquivo e extensão', 'CallBack');

fs.readFile('nome.txt',function(err,data){  // Neste caso, o callback é uma função que retorna "err"
                                            // em caso de erro e "data", que é o conteúdo do arquivo em si e deve ser convertido para String
let string = data.toString();        

let newString = string.split('a');          // Salvamos as informações do arquivo lido e demos um split() nelas

console.log(newString);                    //Vemos as novas informações no console

})

//Assim, é perceptível que as funções "normais" do JavaScript também funcionam nesse ambiente, mostrando o poder do NodeJS

//----------- DELETANDO e RENOMEANDO ARQUIVOS ------------//

// Deletando:
// parâmetros: fs.unlink('nome do arquivo e extensão', 'CallBack');

fs.unlink('nome.txt',function(err){  // Neste caso, o callback é uma função que retorna "err" em caso de erro
                                    
    console.log('O arquivo foi deletado.');
})

// Renomeando:

// parâmetros: fs.rename('nome do arquivo antigo', 'nome do arquivo novo', 'Callback');

fs.unlink('nome.txt','nomenovo.txt',function(err){  // Neste caso, o callback é uma função que retorna "err" em caso de erro
                                    
    console.log('O arquivo foi renomeado com sucesso.');
})

//------- LER O INPUT DO USUÁRIO NO TERMINAl --------

const rl = readLine.createInterface({  // Cria a interface no Terminal

    input: process.stdin,
    output: process.stdout
});

// parâmetros: rl.question('pergunta', 'Callback');

rl.question('Qual o seu nome?',function(name){ // Neste caso, o callback é uma função que retorna o que o usuário digitou

    console.log("Seu nome é :"+name);

    rl.question('Qual o sua idade?',function(idade){

        console.log("Sua idade é :"+idade);
    });
});

rl.on('close',function(){  // Detecta o encerramento da aplicação com o comando 'ctrl + C' e imprime "Adeus!"

    console.log('Adeus!');
    process.exit(0);
});