module.exports = (sequelize, dataTypes)=>{
    const post = sequelize.define('Post', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(100)

        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        n_likes: {
            type: dataTypes.INTEGER

        }
    },{
        tableName: 'posts',
        timestamps:false
      }
    )

    post.associate = (models)=>{
        post.hasMany(models.Comentario, {foreignKey:'posts_id', as: 'comentarios'})
        
    }


    return post
}