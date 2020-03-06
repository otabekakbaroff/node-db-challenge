exports.up = function(knex) {
    return knex.schema.createTable('task', table => {

        table.increments();
        
        table.string('name',255).notNullable().index();

        table.string('description', 500);

        table.string('notes',255);

        table.boolean('completed').defaultTo(false);

        table
        .integer("project_id") 
        .unsigned() 
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task');
};
