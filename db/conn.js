const {Sequelize} = require("sequelize")
const sequelize = new Sequelize("banco_c","root","senai",{
    host: "localhost",
    dialect: "mysql"
},{
    createdAt:false,
    updatedAt:false
})



// sequelize.authenticate().then(()=>{
//     console.log("Conexão realizada com sucesso!")
// }).catch((error)=>{
//     console.log("Não é possivel conectart com banco de dados"+ error)
// })



module.exports = sequelize


