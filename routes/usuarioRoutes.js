import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js'

const usuarioRoutes = express.Router()

usuarioRoutes.post('/criar', UsuarioController.criarUsuario)
usuarioRoutes.get('/buscar/:email', UsuarioController.buscarUsuarioPorEmail)
usuarioRoutes.put('/editar/:email', UsuarioController.editarUsuarioPorEmail)
usuarioRoutes.delete('/deletar/:email', UsuarioController.deletarUsuario)

export default usuarioRoutes