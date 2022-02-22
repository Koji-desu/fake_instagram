const { Usuario} = require('../models')
const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },
    addRegistro: (req,res)=>{
        let{ nome, email, senha} = req.body

        Usuario.create({
            nome, email, senha
        })
    }


}

module.exports = AuthController;