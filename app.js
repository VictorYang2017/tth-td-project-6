const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', ((req, res) => {
    res.render('index');
}));

const PORT = "3000";

app.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
  console.log(`Application: http://localhost:${PORT}`);
});
