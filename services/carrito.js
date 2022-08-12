const db = require('./db');
const helper = require('../helper');
const config = require('../config');
/* get articulos carrito*/

async function getCarrito(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id,usuarioId,articuloId,cantidad
    FROM  Carrito LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
module.exports = {
  getCarrito
}