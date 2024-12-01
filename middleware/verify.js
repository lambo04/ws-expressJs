module.exports = function(req, res, next) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();  // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const currentHour = currentDate.getHours(); // Heure actuelle

    if (currentDay >= 0 && currentDay <= 5 && currentHour >= 0 && currentHour <= 17) {
        return next();  // Accès autorisé pendant les heures de travail
    } else {
        res.sendFile(__dirname + '/../public/views/error.html'); // Page d'erreur si hors des heures
    }
};
