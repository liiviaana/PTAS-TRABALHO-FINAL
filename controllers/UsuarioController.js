import Usuario from '../models/usuarioModel.js'

class UsuarioController {
    criarUsuario = async (req, res) => {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(422).json({
                error: true,
                message: 'Dados inválidos'
            })
        }

        const possivelUsuario = await Usuario.findOne({ email })

        if (possivelUsuario) {
            return res.status(409).json({
                error: true,
                message: 'Email em uso'
            })
        }

        const usuario = new Usuario({
            nome,
            email,
            senha
        })

        usuario.save().then(
            () => res.status(201).json({
                error: false,
                message: 'Usúario criado',
                usuario
            })
        )
    }

    buscarUsuarioPorEmail = async (req, res) => {
        const { email } = req.params

        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status(404).json({
                error: true,
                mensagem: 'Usuário não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Usuário encontrado',
            usuario
        })
    }

    editarUsuarioPorEmail = async (req, res) => {
        const { email } = req.params
        const { nome } = req.body

        if (!nome) {
            return res.status(422).json({
                error: true,
                message: "Nome inválido"
            })
        }

        const response = await Usuario.findOneAndUpdate({ email }, { nome })

        if (!response) {
            return res.status(404).json({
                error: true,
                mensagem: 'Usuário não encontrado'
            })
        }

        res.status(200).json({
            error: false,
            message: 'Usuário atualizado'
        })
    }

    deletarUsuario = async (req, res) => {
        const { email } = req.params

        const response = await Usuario.findOneAndDelete({ email })

        if (!response) {
            return res.status(404).json({
                error: true,
                message: 'Usuário não encontrado',
            })
        }

        res.status(200).json({
            error: false,
            message: 'Usuário deletado',
            usuarioDeletado: response
        })
    }
}

export default new UsuarioController()