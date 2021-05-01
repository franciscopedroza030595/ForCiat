const { Router } = require('express');

const { getZonas, postZona } = require('../controllers/zonas');


const router = Router();


router.post('/', postZona);

router.get('/', getZonas);


module.exports = router;