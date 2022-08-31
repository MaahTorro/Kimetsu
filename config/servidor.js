//importar o pacote do express
const express = require('express')
const fileUpload = require('express-fileupload')
//executar o express aplication
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000

//habilitar o express para receber dados de formulários (colocar pra executar primeiro se não ele n funciona por causa da porra do consign)
app.use(express.urlencoded({extended:false}))
app.use(fileUpload())

//importar o consign
const consign = require('consign')
//executar e configurar o consign
consign().include('./routes').into(app) //quando executar o express (app) vai incluir tudo que esta dentro de routes

//indicar a pasta dos assets (css, js, imagem, webfonts...) para funcionar, se não o css NÃO VAI FUNCIONAR MESMO LINKADO
app.use(express.static('./src'))

module.exports = {app, porta} //exportar o app e a porta pra ele funcionar 