const Pool = require("pg").Pool;

const pool = new Pool({
  user: "cs52",
  password: "builtrackr-tygp18",
  host: "builtrackr.postgres.database.azure.com",
  port: 5432,
  database: "perntodo",
  ssl: {
    rejectUnauthorized: false,
  }
});

module.exports = pool;
