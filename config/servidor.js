//importar o pacote do express
const express = require('express')
//executar o express aplication
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000

//importar o consign 
const consign = require('consign')
//executar e configurar o consign
consign().include('./routes').into(app) //quando executar o express (app) vai incluir tudo que esta dentro de routes

//indicar a pasta dos assets (css, js, imagem, webfonts...) para funcionar, se não o css NÃO VAI FUNCIONAR MESMO LINKADO
app.use(express.static('./src'))

//habilitar o express para receber dados de formulários
app.use(express.urlencoded({extended:false}))

module.exports = {app, porta} //exportar o app e a porta pra ele funcionar 