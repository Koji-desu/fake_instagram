const { sequelize, Post, Comentario } = require('../models');

Post.findAll({include: [{model: Comentario, as: 'comentarios', include: 'usuario'},'usuario']}).then(
    dados => {
        console.log(dados[0].toJSON());
        sequelize.close();
    }
)