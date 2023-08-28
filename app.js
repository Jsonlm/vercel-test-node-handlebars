const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // Lógica para obtener los datos
  const data = { /* ... */ };
  res.render('index', data);
});

// Otras rutas y configuraciones

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});