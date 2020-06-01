const knex = require('knex');

//NOT best practice
//But good way to get started
const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/users.db3'
    },
    useNullAsDefault: true
};

//We pass in our config to create the DB
db = knex(config);

module.exports = db;