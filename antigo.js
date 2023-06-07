const { urlencoded } = require("express")
const express = require("express")
const app = express()
const exphbs = require("express-handlebars") 
const conn = require("./db/conn")
const Produto = require("./models/Produto")

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
app.post("/cadastrar", async(req,res)=>{
    const nome = req.body.nome
    const qtde = Number (req.body.qtde)
    const preco = Number (req.body.preco)

    console.log(nome,qtde,preco)
    await Produto.create({nome,qtde,preco})

    res.redirect("/cadastrar")
})

app.get("/cadastrar",(req,res)=>{
    res.render("cadastra")
})



app.get("/consultar",async(req,res)=>{
    const dados = await Produto.findAll({raw:true})
    console.log(dados)
    res.render("consulta",{valores: dados})
   
})
app.get("/", (req,res)=>{
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




