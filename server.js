const express = require('express');
const app = express();

// Puerto que usa Heroku o 3000 localmente
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde mi app desplegada en Heroku!');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
