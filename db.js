const { Pool } = require('pg');

const pool = new Pool({
  user: 'Deteriator',
  host: 'localhost',
  database: 'friend_information',
  password: null,
  port: 5432
});

// pool.query(`SELECT * FROM friends;`)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  }
};