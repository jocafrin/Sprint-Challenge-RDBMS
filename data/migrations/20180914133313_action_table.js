exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(actions) {
    actions.increments();

    actions
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");

    actions.string("description", 128).notNullable();
    actions.string("comments").notNullable();
    actions.boolean("complete?").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};