const { Endereco } = require('../models');

exports.createEndereco = async (req, res) => {
    try {
        const {Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body;
createEndereconstruct
        const novoEndereco = await Endereco.create({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipioIBGE,
        });

        res.status(201).send(novoEndereco);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao criar endereço' });
    }
};

exports.getEnderecoById = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).jsom(enderecos);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar endereços', details: error.message });
    }
};

exports.getEnderecoById = async (req, res) => {
    try {
        const { Id } = req.params;
        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).send({ error: 'Endereço não encontrado' });
        }

        res.status(200).send(endereco);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar endereço', details: error.message });
    }
};

exports.updateEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).send({ error: 'Endereço não encontrado' });
        }

        endereco.Cep = Cep;
        endereco.Logradouro = Logradouro;
        endereco.Numero = Numero;
        endereco.Complemento = Complemento;
        endereco.Bairro = Bairro;
        endereco.Cidade = Cidade;
        endereco.Estado = Estado;
        endereco.MunicipioIBGE = MunicipioIBGE;

        await endereco.save();

        res.status(200).send(endereco);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao atualizar endereço', details: error.message });
    }
};

exports.deleteEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
        const endereco = await Endereco.findByPk(Id);
    
        if (!endereco) {
            return res.status(404).send({ error: 'Endereço não encontrado' });
        }
        
        await endereco.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: 'Erro ao deletar endereço', details: error.message });
    }
};


class EnderecoController {
    static async buscarECriarEndereco(req, res) {
        try {
            const { cep } = req.params;
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (response.data.erro) {
                return res.status(404).json({ error: 'CEP não encontrado' });
            }

            const {
                logradouro,
                complemento,
                bairro,
                localidade: cidade,
                uf: estado,
                ibge: municipioIBGE,
            } = response.data;

            const novoEndereco = await Endereco.create({
                Cep: cep,
                Logradouro: logradouro,
                Numero: null,
                Complemento: complemento || '',
                Bairro: bairro,
                Cidade: cidade,
                Estado: estado,
                MunicipioIBGE: municipioIBGE,
            });

            return res.status(201).json(novoEndereco);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar e salvar o endereço' });
        }
    }
}
module.exports = EnderecoController;