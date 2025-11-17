import Produto from '../models/produtoModel.js'

class ProdutoController {
    criarProduto = async (req, res) => {
        const { nome, preco, quantidade } = req.body

        if (!nome || !preco || !quantidade) {
            return res.status(422).json({
                error: true,
                message: 'Dados inválidos'
            })
        }

        const produto = new Produto({
            nome,
            preco,
            quantidade
        })

        produto.save().then(
            () => res.status(201).json({
                error: false,
                message: 'Produto criado',
                produto
            })
        )
    }

    buscarProdutoPorId = async (req, res) => {
        const { id } = req.params

        const produto = await Produto.findById(id)

        if (!produto) {
            return res.status(404).json({
                error: true,
                mensagem: 'Produto não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Produto encontrado',
            produto
        })
    }

    editarPrecoProduto = async (req, res) => {
        const { id } = req.params
        const { preco } = req.body

        if (!preco) {
            return res.status(422).json({
                error: true,
                message: "Preço inválido"
            })
        }

        const response = await Produto.findByIdAndUpdate(id, {
            preco
        })

        if (!response) {
            return res.status(404).json({
                error: true,
                mensagem: 'Produto não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Produto atualizado'
        })
    }

    editarQuantidadeProduto = async (req, res) => {
        const { id } = req.params
        const { quantidade } = req.body

        if (!quantidade) {
            return res.status(422).json({
                error: true,
                message: "Quantidade inválido"
            })
        }

        const response = await Produto.findByIdAndUpdate(id, {
            quantidade
        })

        if (!response) {
            return res.status(404).json({
                error: true,
                mensagem: 'Produto não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Produto atualizado'
        })
    }

    deletarProduto = async (req, res) => {
        const { id } = req.params

        const response = await Produto.findByIdAndDelete(id)

        if (!response) {
            return res.status(404).json({
                error: true,
                message: 'Produto não encontrado',
            })
        }

        res.status(200).json({
            error: false,
            message: 'Produto deletado',
            produtoDeletado: response
        })
    }
}

export default new ProdutoController()