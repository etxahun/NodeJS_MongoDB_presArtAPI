var Presion=require('../models/presion');
var express=require('express');

//configure routes

var router=express.Router();

// GET y POST
router.route('/presiones')
    .get(function(req,res){
       Presion.find(function(err,presiones){
           if(err)
                res.send(err);
           res.json(presiones);
       });
    })

    .post(function(req,res){
        var presion = new Presion(req.body);
        presion.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Se ha añadido un nuevo registro de Presión Arterial'});
        });
    });

//PUT(:id) , GET(:id) , DELETE(:id)
router.route('/presiones/:id')
    .put(function(req,res){
        Presion.findOne({_id:req.params.id},function(err,presion){

            if(err)
                res.send(err);

           for(prop in req.body){
                presion[prop]=req.body[prop];
           }

            // save the Presión Arterial
            presion.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Presión Arterial actualizada!' });
            });

        });
    })

    .get(function(req,res){
        Presion.findOne({_id:req.params.id},function(err, presion) {
            if(err)
                res.send(err);

            res.json(presion);
        });
    })

    .delete(function(req,res){
        Presion.remove({
            _id: req.params.id
        }, function(err, presion) {
            if (err)
                res.send(err);

            res.json({ message: 'Registro elminado' });
        });
    });

module.exports=router;
