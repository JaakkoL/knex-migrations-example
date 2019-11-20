
exports.up = function(knex) {
  return knex.schema.alterTable('users', function(t) {
    t.string('email', 255).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', function(t) {
    t.dropColumn('email');
  })
};
