
exports.up = function(knex) {
    return knex.schema.createTable('ngo', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
      });
};

exports.down = function(knex) {
    knex.schema.dropTable('ngo');
};
