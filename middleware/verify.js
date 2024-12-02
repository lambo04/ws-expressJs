const fs = require("fs");

module.exports = function(req, res, next) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();  // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const currentHour = currentDate.getHours(); // Heure actuelle

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 0 && currentHour <= 17) {
        return next();  // Accès autorisé pendant les heures de travail
    }else {
            fs.readFile("./public/views/error.html", (err, data) => {
                if (err) {
                    console.log(err);
                    res.send("Erreur interne du serveur");
                } else {
                    res.end(data);
                }
            });
        }
    };