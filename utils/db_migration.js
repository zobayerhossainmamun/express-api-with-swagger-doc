const knex = require('./db_handler');

knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('users', function (t) {
            t.bigIncrements('id').primary();
            t.string('name', 50);
            t.string('email', 100);
            t.unique('email');
            t.string('password', 100);
            t.timestamp('created_at').defaultTo(knex.fn.now());
        }).then(() => {
            console.log("Database users created with data");
        });
    }
});