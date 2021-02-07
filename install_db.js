'use strict';

const mongoose = require('mongoose');
const Pill = require('./models/Pill');

const pill = new Pill({
    name: 'Python Pill',
    price: '50000',
    selling: true,
    tags: ['Scripting', 'Backend'],
    description: 'With this pill you will learn Python instantly',
    image: 'red-pill.png'
});

const pill2 = new Pill({
    name: 'Kotlin Pill',
    price: '30000',
    selling: false,
    tags: ['Mobile', 'Backend'],
    description: 'With this pill you will learn Kotlin instantly',
    image: 'red-pill.png'
});

const pill3 = new Pill({
    name: 'Swift Pill',
    price: '30000',
    selling: true,
    tags: ['Mobile'],
    description: 'With this pill you will learn Swift instantly',
    image: 'red-pill.png'
});

const pills = [pill, pill2, pill3];

async function initDB(pills) {
    try {
        mongoose.connect('mongodb://localhost/programPills', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        //Drop Collection
        mongoose.connection.dropCollection('pills');
        console.log('Database Wiped...');

        // Add Data

        for (let pill of pills) {
            const newPill = await Pill.create(pill);
            console.log('Added:');
            console.log(newPill);
        }
        console.log('Finished')
        return;
    } catch (err) {
        console.log(err);
        return;
    }
}

initDB(pills);