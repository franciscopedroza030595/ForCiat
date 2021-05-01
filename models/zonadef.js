const { Schema, model } = require('mongoose');

const ZonaSchema = Schema({


    /* 
    "zona":
    {
        "nombre":"7",
        "latitud":1234,
        "logintud":1234,
        "deforestacion": true,
        "area":1234
     }
    */

    zona: {
        type: Object,
        require: true
    }



});

ZonaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;

    return object;
})

module.exports = model('Zona', ZonaSchema);