const express = require('express');
const router = express.Router();
const carrito = require('../services/carrito');

/* GET carrito */
router.get('/carrito', async function(req, res, next) {
  try {
    res.json(await carrito.getCarrito(req.query.page));
  } catch (err) {
    console.error(`Error while getting productos `, err.message);
    next(err);
  }
});


module.exports = router;