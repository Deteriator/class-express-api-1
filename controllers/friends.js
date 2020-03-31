const db = require('../db');

const getAllFriends = (req, res) => {
  db.query(`SELECT * FROM friends;`)
    .then(data => res.json(data.rows))
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500: Internal Server Error'});
    });
};

const getFriendById = (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM friends WHERE id = $1`, [id])
    .then(data => res.json(data.rows[0]))
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500 Internal Server Error'})
    });
};

const addFriend = (req, res) => {
  const { first_name, last_name, age } = req.body;
  const queryText = `INSERT INTO friends 
                    (first_name, last_name, age) 
                    VALUES ($1, $2, $3)`;
  db.query(queryText, [first_name, last_name, age])
    .then(data => {
      console.log(data);
      res.status(201).json({message: 'New friend created.'})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500: Internal Server Error. Resource not created.'});
    })
}

const deleteFriend = (req,res) =>{
    db.query(`DELETE FROM friends WHERE id = $1`,[id])
      .then(data => res.json(data.rows[0]))
      .catch(err =>{
        console.log(err);
        res.status(500).json({error}:`500 Internal Server Error`)
      })
}
const updateFriend =(req,res) =>{
  const { first_name, last_name, age } = req.body;
    db.query(`UPDATE friends SET first_name = $1 last_name = $2 age = $3  WHERE id = $4`,
      [first_name],[last_name],[age],[id])
}

module.exports = {
  getAllFriends,
  getFriendById,
  addFriend,
  deleteFriend,
  updateFriend,
};
