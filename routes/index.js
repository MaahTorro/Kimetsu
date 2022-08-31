const {conexao, conteudo} = require('../config/database')

module.exports = (app)=>{
    app.get("/", async (req,res) => {
        conexao()

        const dados = await conteudo.find()

        res.render("index.ejs", { dados })
    })

    app.get("/images/:imageName", (req, res) => {
        res.sendFile(process.cwd() + '/uploads/' + req.params.imageName)
    })
}