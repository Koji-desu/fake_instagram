const { sequelize, Usuario } = require('../models');

Usuario.findAll({include:['posts', 'amigos']}).then(
    data => {
        console.log(data[0].toJSON());
        // console.log(data.map(u=> u.toJSON()));
        sequelize.close();
    }
)