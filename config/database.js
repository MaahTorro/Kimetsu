const mongoose = require('mongoose')

// fazer de um jeito diferente pra ficar mais seguro sasporra de dados ai
const user = 'user3tri'
const pw = '230205'
const cluster = 'fiaptec.n8xny.mongodb.net'
const db = 'html5up'

const conexao = async() =>{
    const atlas = await mongoose.connect('mongodb+srv://'+user+':'+pw+'@'+cluster+'/'+db)
}

//tipos de coisas que vão no formulario de merda
const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date,default:Date.now}
})

const conteudo = mongoose.model('conteudo', modelo)

module.exports = {conteudo, conexao}