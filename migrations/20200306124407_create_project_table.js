exports.up = function(knex) {
    return knex.schema.createTable('project', table => {

        table.increments();
        
        table.string('name',255).notNullable().index();

        table.string('description', 500);

        table.boolean('completed').defaultTo(false);

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project');
};
