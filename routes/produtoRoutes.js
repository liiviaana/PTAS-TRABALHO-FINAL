import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const produtoRoutes = express.Router()

produtoRoutes.post('/criar', ProdutoController.criarProduto)
produtoRoutes.get('/buscar/:id', ProdutoController.buscarProdutoPorId)
produtoRoutes.put('/editar/:id', ProdutoController.editarPrecoProduto)
produtoRoutes.delete('/deletar/:id', ProdutoController.deletarProduto)

export default produtoRoutes