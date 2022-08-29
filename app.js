const {app, porta} = require('./config/servidor') //jeito mais simples de fazer sem ter q usar dois const

//ligar o servidor
app.listen(porta, ()=>{
    console.log("http://localhost:" + porta)
})


//importar as configs do servidor 
//const servidor = require('./config/servidor')

//armazenar o express application 
//const app = servidor.app

//const porta = servidor.porta

