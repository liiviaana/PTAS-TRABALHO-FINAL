import express from 'express';
import mongoose from 'mongoose';
import usuarioRoutes from './routes/usuarioRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import carrinhoRoutes from './routes/carrinhoRoutes.js';

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/database-sitema-de-vendas').then(() => {
    console.log('Conectado ao banco de dados')
}).catch ( err => {
    console.error('Erro ao conectar ao banco de dados: ', err)
})

app.use('/usuario', usuarioRoutes)
app.use('/produto', produtoRoutes)
app.use('/carrinho', carrinhoRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})