const express = require("express")
const app = express()
const exphbs = require("express-handlebars") 
const { where } = require("sequelize")
const conn = require("./db/conn")
const Verduras = require("./models/Verduras")
const PORT = 3000
const hostname = "localhost"

//---------------------Config express-----------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
// --------------Config express-handlebars------------------------
app.set("view engine", "handlebars")
app.engine("handlebars", exphbs.engine())
// ---------------------------------------------------------------
    app.post("/pesquisa",async(req,res)=>{
        const codigo = req.body.codigo
        console.log(codigo)
        const pesq = await Verduras.findAll({raw:true,where:{id:id}})
        console.log(pesq)
        res.redirect("/")
    })
    app.get("/pesquisar",(req,res)=>{
        res.render("pesquisar")
    })

    
    app.get("/listar",async(req,res)=>{
        const dados = await Verduras.findAll({raw:true})
        console.log(dados)
        res.render("lista",{valores: dados})
        
    })

    app.post("/cadastrar",async(req,res)=>{
        const verduras = req.body.verduras
        const qtde = req.body.qtde
        const preco = req.body.preco
        console.log(verduras,qtde,preco)
        await Verduras.create({verduras,qtde,preco})
        res.redirect("/")
    })

    app.get("/cadastrar",(req,res)=>{
        res.render("cadastro")
    })

    app.post("/apagar",async(req,res)=>{
        const id = req.body.id
        console.log(id)
        const pesq = await Verduras.findOne({raw:true,where:{id:id}})
        console.log(pesq)
        await Verduras.destroy({raw:true,where: {id:pesq.id} })
        res.redirect("/")
    })

    app.get("/apagar",(req,res)=>{
        res.render("apaga")
    })


    app.get("/",(req,res)=>{
        res.render("home")
    })
// ---------------------------------------------------------------
conn.sync().then(()=>{
    app.listen(PORT,hostname,()=>{
    console.log(`Servidor rodando ${hostname}:${PORT}`)
})
}).catch((error)=>{
    console.log("Não foi possivel conectar ao banco de dados!"+ error)



})




