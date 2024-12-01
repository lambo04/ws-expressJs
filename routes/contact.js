module.exports = function(app) {
    app.get('/contact', (req, res) => {
        res.sendFile(__dirname + '/../public/views/contact.html');
    });
};
