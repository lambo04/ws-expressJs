const express = require('express');
const path = require('path');
require("dotenv").config();
const fs = require("fs");

const app = express();
const port = 2500; // Port du serveur

app.use(express.static("public")); // pour css

// Middleware pour vérifier les horaires de travail
const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();  // Jour de la semaine (0: dimanche, 1: lundi, ..., 6: samedi)
    const hour = now.getHours();  // Heure actuelle (0-23)

    // Vérification des horaires de travail
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();  // Si c'est pendant les horaires, on passe à la route suivante
    } else {
        // Si c'est en dehors des horaires, on redirige vers la page d'erreur
        res.status(403).sendFile(path.join('public', 'views', 'error.html'));
    }
};

// Appliquer le middleware pour toutes les routes
app.use(workingHoursMiddleware);

// Routes principales
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

// Route pour la page d'erreur

app.get("/services", (req, res) => {
    fs.readFile("./public/views/erroe.html", (err, data) => {
      err ? console.log(err) : res.end(data);
    });
  });


// Démarrer le serveur
const PORT = process.env.PORT || 4500;


app.listen(PORT, (err) => {
    err? console.log(err): console.log(`The server is running on http://localhost:${PORT}`);
});
