const { response } = require('express');

const Animal = require('../models/animal');

const getAnimales = async(req, res = response) => {


    const animales = await Animal.find().populate('zona', 'zona');


    res.json({
        ok: true,
        animales: animales
    })
}


const postAnimal = async(req, res = response) => {

    try {

        const animal = new Animal(req.body);


        await animal.save();

        res.json({
            ok: true,
            animal
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error inesperado... hable con admi'
        })
    }
}


module.exports = {

    getAnimales,
    postAnimal
}