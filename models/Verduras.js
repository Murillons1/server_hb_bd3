const { DataTypes } = require("sequelize")
const db = require("../db/conn")


const Verduras = db.define("verdura",{
    verduras: {
        type:DataTypes.STRING(30)
    },
    qtde: {
        type:DataTypes.INTEGER
    },
    preco: {
        type:DataTypes.FLOAT
    }

},{
    createdAt:false,
    updatedAt:false
})

// Verduras.sync({force:true})

module.exports = Verduras