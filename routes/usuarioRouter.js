const { Router } = require('express');

// const { PagePerfilUsuarioController } = require('../controllers/usuarios/renders/PagePerfilUsuarioController');
// const { PageInicioLogadoController } = require('../controllers/usuarios/renders/PageInicioLogadoController');
// const { PageEditarUsuarioController } = require('../controllers/usuarios/renders/PageEditarUsuarioController');
const { EditarUsuarioController } = require('../controllers/usuarios/EditarUsuarioController');
const { DeleteUsuarioController } = require('../controllers/usuarios/DeleteUsuarioController');
// const { PageSobreNosController } = require('../controllers/usuarios/renders/PageSobreNosController');

const roteador = Router()

const { Render } = require("../modules/Render")

//page renders
roteador.get('/sobreNos', Render.usuarios.sobreNos);
roteador.get('/perfil', Render.usuarios.perfilUsuario);
roteador.get('/inicioLogado', Render.usuarios.inicioLogado);
roteador.get('/editar', Render.usuarios.editarUsuario);

//update
roteador.patch('/editar/:id', EditarUsuarioController);

//delete
roteador.delete('/:id', DeleteUsuarioController );

module.exports = roteador;

