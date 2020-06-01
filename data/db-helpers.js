const db = require('./db-config');

db.select('*').from('users');
db('users')
// THESE TWO ARE EQUAL ^
// WILL RESOLVE INTO AN ARRAY OF USERS

db('users').where({id: 3})
//resolves to an array containing any users that match the where

db('users').insert({name: 'Gus', age: 25});
//resolves to an array containing the id of the new user

db('users').where({id: 5}).update({age: 77});
//NOTICE THAT WE NEED TO SPECIFY OUR 'WHERE' METHOD BEFORE WE CAN DO ANY UPDATES OR INSERTIONS
// RESOLVES TO THE COUNT OF RECORDS UPDATES

knex('users')
  .where({id: 5})
  .del()