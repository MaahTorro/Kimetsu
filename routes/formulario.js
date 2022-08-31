const {conexao, conteudo} = require('../config/database')
const fs = require('fs');
const crypto = require("crypto");

module.exports = (app)=>{
    app.get('/formulario',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('/formulario', async(req,res)=>{
        const dados = req.body

        const id = crypto.randomBytes(16).toString("hex");

        const nome_imagem = id + '_' + req.files.imagem.name

        fs.writeFile('./uploads/' + nome_imagem, req.files.imagem.data, () => {
        });

        // n precisa mais depois que fez a conexao res.send(dados)
        conexao()

        const doc = await new conteudo({
            estilos:dados.estilos,
            imagem: nome_imagem,
            titulo:dados.titulo,
            texto:dados.texto
        }).save()
        res.redirect('/formulario')
    })
}
