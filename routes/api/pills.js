const express = require('express');
const router = express.Router();

const Pill = require('../../models/Pill');

//Para filtrar por nombre
//http://localhost:3000/api/pills?name=Python%20Pill

// Para filtrar por Tags
// http://localhost:3000/api/pills?tags=Scripting&tags=Backend

router.get('/', async (req, res, next) => {

    try {

        const name = req.query.name;
        const price = req.query.price;
        const selling = req.query.selling;
        const tags = req.query.tags;
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const sort = req.query.sort;

        const filter = {};

        if (name) {
            filter.name = { $regex: name, };
        }

        if (price) {
            filter.price = { '$gte': price[0], '$lte': price[1] };
        }

        if (selling) {
            filter.selling = selling;
        }

        if (tags) {
            filter.tags = tags;
        }



        const result = await Pill.list(filter, limit, skip, sort);
        res.render('index', { data: result })
    } catch (err) {
        next(err);
    }

});

router.get('/tags', async (req, res, next) => {
    try {
        const tags = await Pill.distinct('tags');

        res.render('tags', { tags: tags });
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {

    var createdPill;

    try {
        console.log(req.body);
        const pillData = req.body;

        const pill = new Pill(pillData);

        createdPill = await pill.save();
    } catch (err) {
        next(error);
    }

    res.json(createdPill);
});

module.exports = router;