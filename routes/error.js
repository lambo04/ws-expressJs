module.exports = function(app) {
    app.use((req, res) => {
        res.status(404).sendFile(__dirname + '/../public/views/error.html');
    });
};
