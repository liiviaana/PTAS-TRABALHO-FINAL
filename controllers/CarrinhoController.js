import Carrinho from '../models/carrinhoModel.js'

class CarrinhoController {
    criarCarrinho = async (req, res) => {
        const { usuario, produtos } = req.body

        if (!usuario) {
            return res.status(422).json({
                error: true,
                message: 'Dados inválidos'
            })
        }

        const carrinho = new Carrinho({
            usuario,
            produtos
        })

        carrinho.save().then(
            () => res.status(201).json({
                error: false,
                message: 'Carrinho criado',
                carrinho
            })
        )
    }

    buscarCarrinhoPorId = async (req, res) => {
        const { id } = req.params

        const carrinho = await Carrinho.findById(id)

        if (!carrinho) {
            return res.status(404).json({
                error: true,
                mensagem: 'Carrinho não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Carrinho encontrado',
            carrinho
        })
    }

    editarCarrinho = async (req, res) => {
        const { id } = req.params
        const { produto } = req.body

        if (!produto) {
            return res.status(422).json({
                error: false,
                message: 'Dados inválidos'
            })
        }

        const response = await Carrinho.findByIdAndUpdate(id, { $push: { produtos: produto } })

        if (!response) {
            return res.status(404).json({
                error: true,
                mensagem: 'Carrinho não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Carrinho atualizado'
        })
    }

    deletarCarrinho = async (req, res) => {
        const { id } = req.params
        
        const response = await Carrinho.findByIdAndDelete(id)

        if (!response) {
            return res.status(404).json({
                error: true,
                message: 'Carrinho não encontrado',
            })
        }

        res.status(200).json({
            error: false,
            message: 'Carrinho deletado',
            carrinhoDeletado: response
        })
    }
}

export default new CarrinhoController()