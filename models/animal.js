const { Schema, model } = require('mongoose');

const AnimalSchema = Schema({

    propietario: {
        type: String,
        require: true
    },
    zona: {
        type: Schema.Types.ObjectId,
        ref: 'Zona',
        required: true
    }




});

AnimalSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;

    return object;
})

module.exports = model('Animal', AnimalSchema);