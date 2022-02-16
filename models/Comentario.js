module.exports = (sequelize, dataTypes)=>{
    
    
    const comentario = sequelize.define(
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

    comentario.associate = (models)=>{
        comentario.belongsTo(models.Post, {foreignKey: 'posts_id', as: 'post'})
        comentario.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as:'usuario'})
    }
    return comentario;
}