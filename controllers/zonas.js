const { response } = require('express');

const Zona = require('../models/zonadef');



const getZonas = async(req, res = response) => {

    const zonas = await Zona.find({}, 'zona');

    res.json({
        ok: true,
        zonas,
        uid: req.uid

    });
}

const postZona = async(req, res = response) => {


    try {

        const zona = new Zona(req.body);


        await zona.save();

        res.json({
            ok: true,
            zona
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error inesperado... hable con admi'
        })
    }

}




module.exports = {

    getZonas,
    postZona
}