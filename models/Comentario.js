module.exports = (sequelize, dataTypes)=>{
    
    
    return sequelize.define(
        'Comentario', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        texto: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        posts_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    },
    {   tableName: 'comentarios',
        timestamps: false
    }
)
}