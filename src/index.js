import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function reverse(s){
  return s.split("").reverse().join("");
}

app.get('/', (req, res) => {
  res.json({
  hello: 'JS World',
});
});

app.get('/task2c', (req, res) => {
  var userRevers = reverse(req.query.username);
  if (userRevers.search(/\//) >= 0)
  {
    userRevers = userRevers.substr(0, userRevers.search(/\//));
  }
  var prefix = '';
  if (userRevers.search(/@/) < 0) {
    prefix = "@";
  }
  res.send(prefix + reverse(userRevers));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
