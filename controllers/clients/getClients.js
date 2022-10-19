const connection = require("../../helpers/database");
const { createError } = require('http-errors');

const getClients = async (req, res) => {
    const sqlQuery = 'SELECT id, createdAt, updatedAt, name, mail, message FROM test';
    await connection.query(sqlQuery, (err, result) => {
        if (err) {
            throw createError(404, "Request error")
        } else {
            res.send(result)
        }
    })
};
    
module.exports = getClients;