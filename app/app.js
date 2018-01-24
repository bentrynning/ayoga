class local_app {

    constructor() {

    }

    init(app) {
        // express app available here
        // don't forget these routes will be available on production server (defaults to localhost:5000)
        app.get('/contact', function(req, res) {
            enduro.api.temper.render('contact', { user_name: 'Bent' })
                .then((output) => {
                    res.send(output)
                })
        });

    }
}

module.exports = new local_app();