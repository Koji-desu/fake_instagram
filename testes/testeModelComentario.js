const { sequelize, Comentario } = require('../models');

let promessa = Comentario.findAll({include:'post'});

    promessa.then(
        dados => {
            console.log(dados.map(c=>c.toJSON()));
            sequelize.close();
        }
    )