// Criar a função que vai ser exportada
module.exports = (sequelize, DataTypes)=>{

    const post = sequelize.define(
        'Post',
        {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        },
        {
            tableName: "posts",
            timestamps: false
        }
    );

    post.associate = (models) => {
        post.belongsTo(models.Usuario,{as:"usuario",foreignKey:'usuarios_id'});
        post.belongsToMany(
            models.Usuario,
            {
                as:"curtiram",
                through:"curtidas", // atraves
                foreignKey:"posts_id",
                otherKey: "usuarios_id"
            }
        );                                 
    }

    return post;

}

// post.curtiram