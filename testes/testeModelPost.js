const { sequelize, Post } = require('../models');

Post.findAll({include: ['usuario', 'comentarios']}).then(
    dados => {
        console.log(dados[0].toJSON());
        sequelize.close();
    }
)