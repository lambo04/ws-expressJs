module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../public/views/home.html');
    });
};
