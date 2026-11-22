const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'Funciones_Agregacion',
    'root', 
    '12345678',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }

)

sequelize.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch((errr) => console.log(errr))

module.exports = sequelize