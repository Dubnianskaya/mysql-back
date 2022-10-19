const connection = require("../../helpers/database");

const addClient = async (req, res) => {
    const { name, mail, message } = req.body;
    const sqlQuery = 'INSERT INTO test (name, mail, message) VALUES(?, ?, ?)';
    await connection.query(sqlQuery, [name, mail, message]);

    res.status(201).json({
    status: 'success',
    code: 201,
    });
};
    
module.exports = addClient;