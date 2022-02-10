module.exports = (sequelize, dataTypes)=>{
    return sequelize.define('Usuario',
    {
        id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
        nome: {
            type: dataTypes.STRING(100),
            allowNull: false

        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        senha: {
            type: dataTypes.STRING(256),
            allowNull: false
        }

    }, 
    {   
        tableName: 'usuarios',
        timestamps: false
    }
)
}