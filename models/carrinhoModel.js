import { model, Schema } from 'mongoose'

const carrinhoSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    produtos: [{ type: Schema.Types.ObjectId, ref: 'Produtos' }]
})

const Carrinho = model('Carrinho', carrinhoSchema)

export default Carrinho