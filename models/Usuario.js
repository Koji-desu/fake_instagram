module.exports = (sequelize, dataTypes)=>{
    return sequelize.define('Usuario',
    {
        id: {
        type: dataTypes,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
        nome: {
            type: dataTypes.STRING(100)

        },
        email: {
            type: dataTypes.STRING(100)
        },
        senha: {
            type: dataTypes.STRING(256)
        }

    }, 
    {   
        tableName: usuarios,
        timestamps: false
    }
)
}