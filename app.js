require('dotenv').config();
const express = require('express');
const verify = require('./middleware/verify');
const app = express();
const fs = require("fs");


// Middleware pour les fichiers statiques
app.use(express.static('public'));

// Middleware de vérification
app.use(verify);
// routes
app.get("/", (req, res) => {
  fs.readFile("./public/views/home.html", (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});
app.get("/services", (req, res) => {
  fs.readFile("./public/views/services.html", (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});
app.get("/contact", (req, res) => {
  fs.readFile("./public/views/contact.html", (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});
// // Importer toutes les routes de manière explicite
// const homeRoute = require('./routes/home');
// const servicesRoute = require('./routes/services');
// const contactRoute = require('./routes/contact');
// const errorRoute = require('./routes/error');

// // Appliquer chaque route à l'app
// app.use(homeRoute);
// app.use(servicesRoute);
// app.use(contactRoute);
// app.use(errorRoute);

// Lancer le serveur avec un message de succès
const PORT = process.env.PORT || 7500;

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`The server is running on http://localhost:${PORT}`);
});