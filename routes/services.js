module.exports = function(app) {
    app.get('/services', (req, res) => {
        res.sendFile(__dirname + '/../public/views/services.html');
    });
};
