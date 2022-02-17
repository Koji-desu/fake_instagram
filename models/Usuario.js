module.exports = (sequelize, dataTypes)=>{
    const usuario = sequelize.define(
        'Usuario',
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

     usuario.associate = (models)=>{
        usuario.hasMany(models.Post, {foreignKey: 'usuarios_id', as: 'posts'});
        usuario.belongsToMany(models.Usuario, 
            {as: 'amigos',
         through: 'amizades', timestamps: false,
         foreignKey: 'id_usuario1', otherKey: 'id_usuario2'})
    }

    return usuario
}