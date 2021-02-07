'use strict';

const mongoose = require('mongoose');

const pillSchema = mongoose.Schema({
    name: { type: String, index: true },
    price: { type: [Number], index: true },
    selling: { type: Boolean, index: true },
    tags: { type: [String], index: true },
    description: { type: String },
    image: String
}, {
    collection: 'pills'
});

pillSchema.statics.list = function (filter, limit, skip, sort) {
    const query = Pill.find(filter)

    query.limit(limit);
    query.skip(skip);
    query.sort(sort);

    return query.exec();
}


// creamos el modelo con el esquema definido
const Pill = mongoose.model('Pill', pillSchema);

// exportamos el modelo (opcional)
module.exports = Pill;
