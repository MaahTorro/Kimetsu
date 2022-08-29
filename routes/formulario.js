module.exports = (app)=>{
    app.get('/formulario',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('/formulario',(req,res)=>{
        var dados = req.body
        return res.render('formulario.ejs', { dados })
    })
}
