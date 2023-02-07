export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', 'localhost'),
      port: env.int('MYSQLPORT',),
      database: env('MYSQLDATABASE', 'idf_blog'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', ''),
      ssl: false,
    },
  },
});