import { model, Schema } from 'mongoose'

const produtoSchema = new Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true }
})

const Produto = model('Produto', produtoSchema)

export default Produto