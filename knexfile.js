// Separate config for different environments, if needed.
// See: http://knexjs.org/#knexfile
module.exports = {
  local: {
    client: 'mysql', // mariadb can be used with mysql driver
    connection: process.env.DATABASE_URL || {
      host : '127.0.0.1',
      user : 'root',
      password : 'secret',
      database : 'migrations_example'
    },
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
