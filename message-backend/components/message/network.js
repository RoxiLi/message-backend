const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();

router.get('/', function (req,res){
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado', 500, e);
        })
})

router.post('/', function (req,res,){
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
            })
        .catch(e => {
            response.error(req,res,  'Información invalida', 400, "Error en el controller");
        });
})

router.get('/:userId', function (req,res){
    const filterMessagesByUser = req.query.user || null;
    controller.listMessagesByUser(filterMessagesByUser)
        .then((messageListByUser) => {
            response.success(req, res, messageListByUser, 200);
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado', 500, e);
        })
})



module.exports = router;
