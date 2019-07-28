'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');



// exports.get = async(req,res, next) => {
//     try{
//         const data = await repository.get();
//         res.status(200).send(data);
//     }
//     catch(e){
//         res.status(500).send('Falha ao processar a requisição. '+e);
//     }
// }

// exports.getBySlug = async(req,res, next) => {
//    try{
//     const data = await repository.getBySlug(req.params.slug);
//     res.status(200).send(data);
//    }
//    catch(e){
//     res.status(500).send({
//         message: 'Falha ao processar sua requisição'
//     });
//    }             

// }

// //example how to handle duplicated routes
// exports.getById = async(req,res, next) => {
//     try{
//         const data = await repository.getById(req.params.id);
//         res.status(200).send(data);
//        }
//        catch(e){
//         res.status(500).send({
//             message: 'Falha ao processar sua requisição'
//         });
//        }          
// }

// //example how to handle duplicated routes
// exports.getByTags = async(req,res, next) => {
//     try{
//         const data = await repository.getByTag(req.params.tag);
//         res.status(200).send(data);
//        }
//        catch(e){
//         res.status(500).send({
//             message: 'Falha ao processar sua requisição'
//         });
//        }          
// }

exports.post = async(req,res, next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3,'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'Email invalido');
    contract.hasMinLen(req.body.password, 6,'A senha deve conter pelo menos 6 caracteres');

    if (!contract.isValid())
    {
        res.status(400).send(contract.errors()).end();
        return;
    }
        try{
            await repository.create(req.body);   
            res.status(201).send({message: 'Cliente cadastrado com sucesso!'});
        }
        catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição2'+ e.message
            });
        }
}

// exports.put = async (req,res,next) => {
//     try{
//         await repository.update(req.params.id,req.body);
//         res.status(200).send({message: 'Produto atualizado com sucesso!'});
//     } 
//     catch(e){
//         res.status(500).send({
//         message: 'Falha ao processar sua requisição'
//         });
// }


// }

// exports.delete = async(req,res,next) => {
//     try{
//         await  repository.delete(req.params.id);
//         res.status(200).send({ message: 'Produto removido com sucesso!'});
//     }
//     catch(e){
//         res.status(500).send({
//         message: 'Falha ao processar sua requisição'
//     });
//     }
// }