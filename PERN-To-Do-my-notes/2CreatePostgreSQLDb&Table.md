* First of all install postgreSQL and add bin file into *System environmental variable*.
* Open cmd and type `psql -U postgres` for connect local db
* then type password.(This password is provide when PostgreSQL is installing)
<br>
* **Open remote db**
* `psql -h builtrackr.postgres.database.azure.com -p 5432 -d test -U cs52 -W`
Here,
builtrackr.postgres.database.azure.com - host
5432 -port
test -db name
cs52 -username
* Then type password
<br>
* `\l` show all databases
* `\c <db_name>` connect to relevant database
* `\dt` show all tables in db
<br>
* `CREATE DATABASE test;` creating a db called test.
Here without `;` db isn't creating. If db is successfully created cmd will show `CREATE DATABASE`. We can confirm it using `\l`.
* We can create db inside another db.
<br>
* Create a table
`CREATE TABLE todo(todo_id SERIAL PRIMARY KEY, description VARCHAR(255));` SERIAL use for auto increment, not null




