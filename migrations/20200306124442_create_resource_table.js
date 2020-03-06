exports.up = function(knex) {
    return knex.schema.createTable('resource', table => {

        table.increments();
        
        table.string('name',255).notNullable().index();

        table.string('description', 500);

        
        table
        .integer("task_id") 
        .unsigned() 
        .notNullable()
        .references("id")
        .inTable("task")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resource');
};
