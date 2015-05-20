//================================Routes===========================================//

module.exports = function(app) {

    //=============================== VERIFY ===========================================

    //use this to check the current user
    app.get('/verify/:id', function(req, res) {
        res.send(currentUser);
    });
}