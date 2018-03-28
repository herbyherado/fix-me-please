const express = require('express');
const router = express.Router();
var { all, create, update, deletion } = require('../controllers/books');

router.get('/', all)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deletion)

module.exports = router
