import { model, Schema } from 'mongoose'

const usuarioSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
})

const Usuario = model('Usuario', usuarioSchema)

export default Usuario