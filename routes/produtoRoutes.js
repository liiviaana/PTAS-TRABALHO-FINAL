import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const produtoRoutes = express.Router()

produtoRoutes.post('/criar', ProdutoController.criarProduto)
produtoRoutes.get('/buscar/:id', ProdutoController.buscarProdutoPorId)
produtoRoutes.put('/editar/preco/:id', ProdutoController.editarPrecoProduto)
produtoRoutes.put('/editar/quantidade/:id', ProdutoController.editarQuantidadeProduto)
produtoRoutes.delete('/deletar/:id', ProdutoController.deletarProduto)

export default produtoRoutes