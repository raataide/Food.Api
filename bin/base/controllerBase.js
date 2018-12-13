exports.post = async(repo, validationContract, req, res) =>{
    try {
        let data = req.body;
        if (!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição.', 
                validation: validationContract.errors()
            }).end();                            
            return;
        }

        let result = await repo.create(data);
        res.status(201).send(result);
    } catch (err) {
        console.log('Post com erro, motivo: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }

};

exports.put = async(repo, validationContract, req, res) =>{
    try {
        let data = req.body;
        if (!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição.', 
                validation: validationContract.errors()
            }).end();                            
            return;
        }

        let result = await repo.update(req.params.id, data);
        res.status(202).send(result);
    } catch (err) {
        console.log('Put com erro, motivo: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }

};

exports.get = async(repo, req, res) =>{
    try {
        let lista = await repo.getAll();
        res.status(200).send(lista);
    } catch (err) {
        console.log('Get com erro, motivo: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
};

exports.getById = async(repo, req, res) =>{
    try {
        let id = req.params.id;
        if (id){
            let data = await repo.getById(id);
            res.status(200).send(data);
        } else{
            res.status(400).send({message: 'Id não informado'});
        }
    } catch (err) {
        console.log('Get por Id com erro, motivo: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
};

exports.delete = async(repo, req, res) =>{
    try {
        let id = req.params.id;
        if (id){
            let data = await repo.delete(id);
            res.status(200).send({message: 'Registro excluído com sucesso.'});
        } else {
            res.status(400).send({message: 'Id não informado.'});
        }
    } catch (error) {
        console.log('Delete com erro, motivo: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
};

