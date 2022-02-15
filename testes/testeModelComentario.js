const { sequelize, Comentario } = require('../models');

Comentario.findAll({includes: 'post'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)