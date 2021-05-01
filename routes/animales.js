const { Router } = require('express');

const { getAnimales, postAnimal } = require('../controllers/animales');


const router = Router();


router.post('/', postAnimal);


router.get('/', getAnimales);


module.exports = router;