import express from 'express'
import CarrinhoController from '../controllers/CarrinhoController.js'

const carrinhoRoutes = express.Router()

carrinhoRoutes.post('/criar', CarrinhoController.criarCarrinho)
carrinhoRoutes.get('/buscar/:id', CarrinhoController.buscarCarrinhoPorId)
carrinhoRoutes.put('/editar/:id', CarrinhoController.editarCarrinho)
carrinhoRoutes.delete('/deletar/:id', CarrinhoController.deletarCarrinho)

export default carrinhoRoutes