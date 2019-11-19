# knex-migrations-example

## Requirements
 - `docker`
 - `docker-compose`
 - `npm`
 - `node`

 ## Setup instructions

 ```bash
 # Clone repository
 $ git clone git@github.com:JaakkoL/knex-migrations-example.git
 $ cd knex-migrations-example

 # Install dependencies
 $ npm install

 # Instantiate test database
 $ docker-compose up
 
 # You now should have mariadb running and exposed to local port 3306.
 # DB is initiated with root password `secret`.

 # If you have mysql installed locally, you can test database access:
 $ mysql -h 127.0.0.1 -u root -psecret -e "SELECT VERSION();"
 +----------------------------------------+
| VERSION()                              |
+----------------------------------------+
| 10.4.10-MariaDB-1:10.4.10+maria~bionic |
+----------------------------------------+
```

## Testing basic knex commands.
```bash
# List pending migrations
$ node_modules/.bin/knex migrate:list --env=local
Using environment: local
No Completed Migration files Found.
Found 1 Pending Migration file/files.
20191119144748_initial-migration.js

# Run migrations
$ node_modules/.bin/knex migrate:up --env=local
Using environment: local
Batch 1 ran the following migrations:
20191119144748_initial-migration.js

# Undo last migration
$ node_modules/.bin/knex migrate:down --env=local
Using environment: local
Batch 1 rolled back the following migrations:
20191119144748_initial-migration.js

# Create a new migration
$ node_modules/.bin/knex migrate:make new-migration  --env=local
Using environment: local
Created Migration: ~/knex-migrations-example/migrations/20191119151542_new-migration.js
```

## Links
- [Knex Migrations](https://knexjs.org/#Migrations)
