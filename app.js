const friendsController = require('./controllers/friends');

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/friends', friendsController.getAllFriends);

app.get('/friends/:id', friendsController.getFriendById);

app.post('/friends', friendsController.addFriend);

app.delete('/friends/:id',friendsController.deleteFriend);

app.put('/friends/:id',friendsController.updateFriend);

app.listen(port, () => console.log(`Now listening on port ${port}...`));

